import React, { useState } from 'react';
import '../../../App.css';
import './DateFilter.css';
import Calendar from 'react-calendar';


export default function DateFilter() {
    const [selectedDates, setSelectedDates] = useState([]);

    const handleDateClick = date => {
        const dateStr = date.toISOString().split('T')[0];

        if (selectedDates.includes(dateStr)) {
            setSelectedDates(selectedDates.filter(selectedDate => selectedDate !== dateStr));
        } else {
            setSelectedDates([...selectedDates, dateStr]);
        }
    };
    const navigationLabel= (date) => {
        return(
            <span
                className="disable-pointer-events"
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                }}
            >{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        )
    }

    return (
        <div className='date-filter'>
            <div>Select Date</div>
            <div className={'calendar'}>
                <Calendar
                    tileClassName={({ date, view }) =>
                        selectedDates.includes(date.toISOString().split('T')[0]) ? 'selected' : ''
                }
                    onClickDay={handleDateClick}
                    selectRange={false}
                    value={null}
                    navigationLabel={({ date }) => (navigationLabel(date))}
                />
            </div>
        </div>

    );
}
