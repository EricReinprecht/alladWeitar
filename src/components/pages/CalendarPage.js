import React from 'react'
import '../../App.css'

import './Calendar.css';
import './CalendarPage.css';

import Calendar from '../Calendar/Calendar';


import { useState } from 'react';

export default function CalendarPage() {
  
    const [date, setDate] = useState(new Date());

    const onChange = date => {
      setDate(date);
    }

    return (
      <div className='calendar-container'>
        
        <Calendar/>
      </div>
    );
  }