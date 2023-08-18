import React from 'react'
import './ErrorPage.css'
import {RiArrowDropUpFill} from "react-icons/ri";
import {BiSolidRightArrow} from "react-icons/bi";
import {IoMdArrowDropleft} from "react-icons/io";

export default function ErrorPage() {

  const handleOnClick = ()=> console.log("haloo")
  return (
    <>
    <div className='error-page'>
      <div className='error-massage'>Error ! Page not found</div>
      <div className="btn-wrap">
          <RiArrowDropUpFill className="icon"/>
          <BiSolidRightArrow />

      </div>
    </div>
    </>
  )
}