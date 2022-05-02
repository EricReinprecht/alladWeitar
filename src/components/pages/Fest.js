import React from 'react'
import '../../App.css'
import'./Fest.css'
import { Link } from 'react-router-dom'
import FestMainInfos from '../FestMainInfos'
import FestOtherInfos from '../FestOtherInfos'
import { useState, useEffect } from 'react';

import Fester from '../Fester.json'

export default function Fest() {
  return (
      <>
        <FestMainInfos/>
        <FestOtherInfos />
      </>
    
    )
}