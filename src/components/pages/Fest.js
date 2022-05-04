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

  let users = {
    'users': {
      'user1': {
        'id': '1',
        'name': 'Brandon',
        'DOB': '05/04/2000'
      },
      'user2': {
        'id': '2',
        'name': 'Jefferson',
        'DOB': '05/19/2004'
      }
    }
  }
  
  const findUserById = (id) => {
    const key = Object.keys(users.users).find(user => users.users[user].id === '1')
    return users.users[key]
  }
  
  console.log(findUserById('1'))
 

  return (
      <>
      <div className='test'>
        { festname }
      </div>
      </>
    
    )
}