import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Searchbar from './Searchbar';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  let isDisplayed = false;

  function displayCalendar(){
    let calendar = document.getElementsByClassName("calendar")[0];
    if(!isDisplayed){
      calendar.style.display = "block";
      isDisplayed = true;
    }else{
      calendar.style.display ="none";
      isDisplayed = false;
    }
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i className="fa-solid fa-beer-mug-empty"/>
            <div className='app-name'>alladWeitar</div>
          </Link>
          <div className='searchbar'>
              <Searchbar/>
          </div>
          <div className='calendar-button'>
            <button onClick={() => displayCalendar()}>Calendar</button>
          </div>
          <div className='home-button'>
            <Link to='/' className='nav-links' id="home-button">
              Home
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}