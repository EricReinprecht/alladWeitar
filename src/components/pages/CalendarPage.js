import React from 'react'
import '../../App.css'

import './CalendarPage.css';

import Calendar from '../Calendar/Calendar';

export default function CalendarPage() {  

    return (
      <>
        <div className='calendar-site'>
          <Calendar/>
        </div> 
      </>
    );
  }