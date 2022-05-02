import React from 'react'
import { Link } from "react-router-dom";
import './Content.css'

export default function Content(props) {
  
  return (
    <>
    <Link to='/fest' className='content-link'>
    <button className='content'>
      <div className='info'>{props.name}</div>
      <div className='info'>{props.date}</div>
    </button>
    </Link>
    </>
  )
}

