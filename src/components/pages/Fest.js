import React from 'react'
import '../../App.css'
import'./Fest.css'
import { useParams, useNavigate } from "react-router-dom";
import FestMainInfos from '../FestMainInfos'
import FestOtherInfos from '../FestOtherInfos'
import { useState, useEffect } from 'react';

import Fester from '../Fester.json'

export default function Fest(props) {
  let { festname } = useParams();


  

  return (
      <>
      <div className='fest-main'>
        <div className='fest-display'>
        <div className='header'>
          { festname }
        </div>
          <div className='infos'>
            <div className='infos-main'>
              <FestMainInfos />
            </div>
            <div className='infos-other'>
              <FestOtherInfos/>
            </div>
          </div>
        </div>
      </div>
      
      </>
    
    )
}