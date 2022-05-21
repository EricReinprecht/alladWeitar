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

    function curretMonthName(){
        return value.format("MMMM")
    }

    function curretYear(){
        return value.format("YYYY")
    }

    function prevMonth(){
        return value.clone().subtract(1, "month")
    }

    function nextMonth(){
        return value.clone().subtract(-1, "month")
    }

  return (
    <>
        <div className='calendar-display'>
            <div className='calendar'>
                <div className='header'>
                    <div className='prev' onClick={() => setValue(prevMonth())}>{String.fromCharCode(171)}</div>
                    <div className='current'>{curretMonthName()} {curretYear()}</div>
                    <div className='next' onClick={() => setValue(nextMonth())}>{String.fromCharCode(187)}</div>
                </div>
                <div className='body'>
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
        </div> 
    </>
  )
}

