import React from 'react'
import "./OtherInfo.css"

export default function OtherInfo(props) {
  return (
      <>
        <div className='info'>{props.info}</div>
      </>
  )
}