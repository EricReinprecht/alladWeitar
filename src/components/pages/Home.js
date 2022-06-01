import React, { useState, useReducer } from 'react'
import '../../App.css'
import Calendar from '../Calendar/Calendar'
import ContentList from '../ContentList'
import'./Home.css'
import moment from 'moment'

function reducer(state, action){}

export default function Home() {

  const [value, setValue] = useState(moment());
  const [selectedDates, setDates] = useState([]);
  const [fest, setFest] = useState();
  const [state, dispatch] = useReducer(reducer, "selectedDates");

  let halloo = <ContentList selectedDates={"18.3.2022"}/>

  function hallo(){
    setFest(<ContentList selectedDates={selectedDates[0]}/>)
  
  }

  return (
    <>
      <div className='home-page'>
        <div className='contentList-container'>
          {fest}
        </div>
        <div className='calendar-container'>
          <Calendar value={value} setValue={setValue} selectedDates={selectedDates} setDates={setDates}/>
        </div>
      </div>
      <button className="hallo" onClick={() => hallo()}>hallo</button>
    </>
    )
}

