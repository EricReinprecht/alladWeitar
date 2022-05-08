import React from 'react'
import { useNavigate } from "react-router-dom";
import './Content.css'

export default function Content(props) {
  
  let navigate = useNavigate();
  
  return (
    <>
    <button className='content' onClick={() => {navigate('/fest/' + props.name)}}>
      <div className='info'>{props.name}</div>
      <div className='info'>{props.date}</div>
    </button>
    </>
  )
}

