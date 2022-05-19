import moment from 'moment';
import React from 'react'
import './Calendar.css'
import { useState, useEffect } from 'react';

function Calendar() {

    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());

    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");
    const day = startDay.clone().subtract(1, "day");

    useEffect(() => {

        
        const a = [];

        while(day.isBefore(endDay, "day")){
            a.push(
                Array(7).fill(0).map(() => day.add(1, "day").clone())
            )
        }

        setCalendar(a);
    }, [value])

// 14:15

  return (
    <>
        <div className='calendar-display'>
            <div className='calendar'>
                {calendar.map((week) => (
                    <div className='week'>
                        {week.map((day) => (
                            <div className='day'>{day.format("D").toString()}</div>
                        ))}

                </div>))}
            </div>  
        </div> 
    </>
  )
}

export default Calendar