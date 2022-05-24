import React from 'react'
import '../../App.css'
import Calendar from '../Calendar/Calendar'
import ContentList from '../ContentList'
import'./Home.css'
import './CalendarPage.css'

export default function Home() {
  return (
      <>
        <ContentList />
        <Calendar />
      </>
    )
}

