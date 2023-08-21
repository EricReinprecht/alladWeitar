import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './DateFilter.css';

function App() {
    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedDatesReal, setSelectedDatesReal] = useState([]);

    const printDates = () => {
        console.log('Selected Dates:', selectedDates);
        console.log('Selected Dates Real:', selectedDatesReal);
    }

    const handleDateClick = date => {
        const dateStr = date.toISOString().split('T')[0];

        if (selectedDates.includes(dateStr)) {
            setSelectedDates(selectedDates.filter(selectedDate => selectedDate !== dateStr));
        } else {
            setSelectedDates([...selectedDates, dateStr]);
        }


        const selectedDateReal = new Date(date);
        selectedDateReal.setHours(0, 0, 0, 0);

        const localOffset = selectedDateReal.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
        const adjustedDateReal = new Date(selectedDateReal.getTime() - localOffset);

        const clickedDateStrReal = adjustedDateReal.toISOString().split('T')[0];
        console.log(clickedDateStrReal);

        if (selectedDatesReal.includes(clickedDateStrReal)) {
            setSelectedDatesReal(selectedDates.filter(date => date !== clickedDateStrReal));
        } else {
            setSelectedDatesReal([...selectedDatesReal, clickedDateStrReal]);
        }


    };


    const navigationLabel = ({ date }) => {
        return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
    };

    return (
        <div className="App">
            <h1>Multi-Date Calendar</h1>
            <Calendar
                tileClassName={({ date, view }) =>
                    selectedDates.includes(date.toISOString().split('T')[0]) ? 'selected' : ''
                }
                onClickDay={handleDateClick}
                selectRange={false}
                value={null}
            />
            <button onClick={printDates}>print Dates</button>
        </div>
    );
}

export default App;

