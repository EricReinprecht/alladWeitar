import React, { useState } from 'react';
import '../../../App.css';
import './FilterMenu.css';
import './DateFilter.css';
import Calendar from 'react-calendar';

export default function DateFilter() {
    const [selectedDates, setSelectedDates] = useState([]);

    const formatDate = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

// Usage example
    const today = new Date();
    const formattedDate = formatDate(today); // Example output: "2023-08-21"


    const handleDateClick = date => {
        console.log('Clicked Date:', date);

        const selectedDate = new Date(date);
        selectedDate.setHours(0, 0, 0, 0);

        const localOffset = selectedDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
        const adjustedDate = new Date(selectedDate.getTime() - localOffset);

        const clickedDateStr = adjustedDate.toISOString().split('T')[0];
        console.log(clickedDateStr);

        if (selectedDates.includes(clickedDateStr)) {
            setSelectedDates(selectedDates.filter(date => date !== clickedDateStr));
        } else {
            setSelectedDates([...selectedDates, clickedDateStr]);
        }
    };



    const navigationLabel = ({ date }) => {
        return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
    };

    const printDates = () => {
        console.log('Selected Dates:', selectedDates);

        const date = new Date();
        const timezoneOffset = date.getTimezoneOffset();
        console.log(`Timezone Offset: ${timezoneOffset} minutes`);
    }

    return (
        <div className='date-filter'>
            <div>Select Date</div>
            <div className={'calendar'}>
                <Calendar
                    tileClassName={({ date, view }) =>
                        selectedDates.includes(date.toString().split('T')[0]) ? 'selected' : ''
                    }
                    onClickDay={handleDateClick}
                    selectRange={false}
                    value={null}
                    navigationLabel={navigationLabel}
                />
            </div>
            <button onClick={printDates}>print Dates</button>
        </div>
    );
}
