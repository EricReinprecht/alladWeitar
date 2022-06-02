import React, { useState, useReducer } from 'react'
import '../../App.css'
import Calendar from '../Calendar/Calendar'
import ContentList from '../ContentList'
import'./Home.css'
import moment from 'moment'


export default function Home() {

  const [value, setValue] = useState(moment());
  const [selectedDates, setDates] = useState([]);
  const [fest, setFest] = useState();



  

  return (
    <>
      <div className='home-page'>
        <div className='contentList-container'>
          <div className="defaultFestList"><ContentList/></div>
          {fest}
        </div>
        <div className='calendar-container'>
          <Calendar value={value} setValue={setValue} selectedDates={selectedDates} setDates={setDates} fest={fest} setFest={setFest}/>
        </div>
      </div>
    </>
    )
}

