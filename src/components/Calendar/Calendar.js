import moment from 'moment';
import React from 'react'
import './Calendar.css'
import { useState, useEffect } from 'react';
import buildCalendar from './Build';
import dayStyles from './Styles';

export default function Calendar() {

    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value])


  return (
    <>
        <div className='calendar-display'>
            <div className='calendar'>
                {calendar.map((week) => (
                    <div className='week'>
                        {week.map((day) => (
                            <div className='day' onClick={() => setValue(day)}>
                                <div className={dayStyles(day, value)}>{day.format("D").toString()}</div>
                            </div>
                        ))}

                </div>))}
            </div>  
        </div> 
    </>
  )
}

