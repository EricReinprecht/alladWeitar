import React from 'react'
import { useNavigate } from "react-router-dom";
import './Content.css'

export default function Content(props) {
  
  let navigate = useNavigate();

  function onClickFest(){
    let calendarButton = document.getElementsByClassName("calendar-button")[0];
    calendarButton.style.display = "none";
    navigate('/fest/' + props.name);
  }
  
  return (
    <>
    <button className='content' onClick={() => onClickFest()}>
      <div className='info'>{props.name}</div>
      <div className='info'>{props.date}</div>
    </button>
    </>
  )
}

