import React from 'react'
import moment from 'moment'


export default function CalendarHeader(props) {

    function currentMonthName(){
        return moment(props.value).format("MMMM");
    }

    function currentYear(){
        return moment(props.value).format("YYYY");
    }

    function prevMonth(){
        return moment(props.value).clone().subtract(1, "month");
    }

    function nextMonth(){
        return moment(props.value).clone().subtract(-1, "month");
    }

    function thisMonth(){
        return props.value.isSame(new Date(), "month");
    }

  return (
    <div className='calendar-header'>
        <div className='prev' onClick={() => !thisMonth() && props.setValue(prevMonth())}>{!thisMonth() ? String.fromCharCode(171) : null}</div>
        <div className='current'>{currentMonthName()} {currentYear()}</div>
        <div className='next' onClick={() => props.setValue(nextMonth())}>{String.fromCharCode(187)}</div>
    </div>
  )
}

