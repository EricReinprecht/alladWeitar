import React from 'react'
import { useNavigate } from "react-router-dom";
import './Content.css'

export default function Content(props) {

  let calendarButton = document.getElementsByClassName("calendar-button")[0];
  
  let navigate = useNavigate();

  function onClickFest(){
    navigate('/fest/' + props.name);
    calendarButton.style.display = "none";
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

