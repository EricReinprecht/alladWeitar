import React from 'react'
import '../../App.css'
import Calendar from 'react-calendar'
import './Calendar.css';
import './CalendarPage.css';
import 'react-calendar/dist/Calendar.css';


import { useState } from 'react';

export default function CalendarPage() {
  
    const [date, setDate] = useState(new Date());

    const onChange = date => {
      setDate(date);
    }

    return (
      <div className='calendar-container'>
        <Calendar
          minDetail="year"
          onChange={onChange} 
          value={date}
          minDate={new Date(2022, 1, 1)}
          
        />
      </div>
    );
  }