import React from 'react'
import ContentList from '../PartyDisplay/ContentList';

export default function Buttons(props) {

    let calendar = document.getElementsByClassName("calendar")[0];
    let calendarBackground = document.getElementsByClassName("calendar-background")[0];

    function diplayFilteredFestList(){
      props.setFest(<ContentList selectedDates={props.selectedDates[0]}/>);
    }

    function diplayDefaultFestList(){
      props.setFest(<ContentList selectedDates={undefined}/>);
    }


    function closeCalendar(){
        calendar.style.display = 'none';
        calendarBackground.style.display = 'none';
    }

    function selectDates(date){
        closeCalendar();
        props.selectedDates.pop();
        props.selectedDates.push(date);
        diplayFilteredFestList();
        
    }

    function deleteFilter(){
        closeCalendar();
        props.selectedDates.pop();
        diplayDefaultFestList();
    }



  return (
    <>
        <div className='button-container'>
                <button className="button select" onClick={() => selectDates(props.value.format("D.M.YYYY"))}>Select</button>
                <button className='button delete' onClick={() => deleteFilter()}>Delete</button>
        </div>
    </>
  )
}

