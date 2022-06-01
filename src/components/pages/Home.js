import React, { useState } from 'react'
import '../../App.css'
import Calendar from '../Calendar/Calendar'
import ContentList from '../ContentList'
import'./Home.css'
import moment from 'moment'


export default function Home() {

  const [value, setValue] = useState(moment());

  return (
    <>
      <div className='home-page'>
        <div className='contentList-container'>
          <ContentList />
        </div>
        <div className='calendar-container'>
          <Calendar value={value} setValue={setValue}/>
        </div>
      </div>
    </>
    )
}

