import React from 'react'

export default function Background() {

    let calendar = document.getElementsByClassName("calendar")[0];
    let calendarBackground = document.getElementsByClassName("calendar-background")[0];

    function closeCalendar(){
        calendar.style.display = 'none';
        calendarBackground.style.display = 'none';
    }

  return (
    <>
        <div className='calendar-background' onClick={() => closeCalendar()}></div>
    </>
  )
}
