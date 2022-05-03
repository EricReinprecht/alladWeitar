import React from 'react'
import '../../App.css'
import'./SignUp.css'

import { useState, useEffect } from 'react';

export default function SignUp() {
  return (
      <>
      <div className='signUp-main'>
        <input type="text" name="name" />
        <input type="text" name="password" />
      </div>
        
      </>
    
    )
}