import React, { useState, useEffect } from 'react';
import { Button } from './Button';
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

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i className="fa-solid fa-beer-mug-empty"/>
            <div className='app-name'>alladWeitar</div>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className='searchbar'>
              <Searchbar/>
          </div>
          <div className='nav-items'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              
              <li className='nav-item' id="calendar-button">
                <Link to='/calendar' className='nav-links' onClick={closeMobileMenu}>
                  Calendar
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' id="home-button" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              {/*<li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>*/}
              {/*<li>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>*/}
            </ul>
          </div>
          {/*{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}*/}
        </div>
      </nav>
    </>
  );
}