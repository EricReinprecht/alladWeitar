import React from 'react'
import './Calendar.css'
import { useState, useEffect } from 'react';
import buildCalendar from './Build';
import dayStyles, { beforeToday } from './Styles';
import Header from './Header';
import Weekdays from './Weekdays';
import Background from './Background';


export default function Calendar(props) {

    const [calendar, setCalendar] = useState([]);
    

    

    useEffect(() => {
        setCalendar(buildCalendar(props.value));
    }, [props.value])

    function selectDates(date){
        props.selectedDates.pop()
        props.selectedDates.push(date)
        console.log(props.selectedDates[0])
    }
    

  return (
    <>
        <Background/>
        <div className='calendar'>
        <button onClick={() => selectDates(props.value.format("D.M.YYYY"))}>HALLO</button>
           <Header value={props.value} setValue={props.setValue} />
           <Weekdays />
           <div className='body'>
               {calendar.map((week) => (
                   <div className='week'>
                       {week.map((day) => (
                           <div className='day' onClick={() => !beforeToday(day) && props.setValue(day)}>
                               <div className={dayStyles(day, props.value)}>{day.format("D").toString()}</div>
                           </div>
                       ))}
               </div>))}
           </div>
        </div>  
    </>
  )
}

