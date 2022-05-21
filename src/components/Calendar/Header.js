import React from 'react'
import moment from 'moment'

export default function CalendarHeader(value, setValue) {

    function curretMonthName(){
        return moment(value).format("MMMM")
    }

    function curretYear(){
        return moment(value).format("YYYY")
    }

    function prevMonth(){
        return moment(value).clone().subtract(1, "month")
    }

    function nextMonth(){
        return moment(value).clone().subtract(-1, "month")
    }

  return (
    <div className='header'>
        <div className='prev' onClick={() => setValue(prevMonth())}>{String.fromCharCode(171)}</div>
        <div className='current'>{curretMonthName()} {curretYear()}</div>
        <div className='next' onClick={() => setValue(nextMonth())}>{String.fromCharCode(187)}</div>
    </div>
  )
}

