import moment from 'moment';
import React from 'react'
import './Calendar.css'
import { useState, useEffect } from 'react';
import buildCalendar from './Build';

function Calendar() {

    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value])
    
    
    

    function isSelected(day, value){
        return value.isSame(day, "day")
    }
    
    function beforeToday(day){
        return day.isBefore(new Date(), "day")
    }
    
    function isToday(day){
        return day.isSame(new Date(), "day")
    }

    function dayStyles(day) {

    if(beforeToday(day)) return "before"
    if(isSelected(day)) return "selected"
    if(isToday(day)) return "today"
    return "normal"
    }
    

  return (
    <>
        <div className='calendar-display'>
            <div className='calendar'>
                {calendar.map((week) => (
                    <div className='week'>
                        {week.map((day) => (
                            <div className='day' onClick={() => setValue(day)}>
                                <div className={dayStyles(day)}>{day.format("D").toString()}</div>
                            </div>
                        ))}

                </div>))}
            </div>  
        </div> 
    </>
  )
}

export default Calendar