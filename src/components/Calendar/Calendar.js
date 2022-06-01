import React from 'react'
import './Calendar.css'
import { useState, useEffect } from 'react';
import buildCalendar from './Build';
import dayStyles, { beforeToday } from './Styles';
import Header from './Header';
import Weekdays from './Weekdays';

export default function Calendar(props) {


    const [calendar, setCalendar] = useState([]);

    let selectedDates = [];
    

    useEffect(() => {
        setCalendar(buildCalendar(props.value));
    }, [props.value])

    function selectDates(){
        selectedDates.push(props.value);

        selectedDates.forEach(date => {
            console.log(date)
        });

        console.log(selectedDates)
    }

    function closeCalendar(){
        let calendar = document.getElementsByClassName("calendar")[0];
        let calendarBackground = document.getElementsByClassName("calendar-background")[0];
        calendar.style.display = 'none';
        calendarBackground.style.display = 'none';
    }

    

  return (
      
    <>
    <div className='calendar-background' onClick={() => closeCalendar()}></div>
        <div className='calendar'>
        <button onClick={() => selectDates()}>HALLO</button>
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

