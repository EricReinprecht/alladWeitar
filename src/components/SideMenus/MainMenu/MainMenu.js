import React, { useState } from 'react';
import '../../../App.css';
import './MainMenu.css';
import {BiSolidLeftArrow, BiSolidRightArrow} from 'react-icons/bi';
import {IoMdArrowDropleft} from "react-icons/io"; // Import a menu icon from a library like Font Awesome

export default function MainMenu({ results }) {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className='main-menu'>
            <div className={`menu ${menuVisible ? 'main-menu-expanded' : ''}`}>
                <div className='menu-item'>Item 1</div>
                <div className='menu-item'>Item 2</div>
                <div className='menu-item'>Item 3</div>
            </div>

            <div
                className={`main-menu-button ${menuVisible ? 'main-menu-button-expanded' : ''}`}
                onClick={toggleMenu}
            >
                <BiSolidLeftArrow/>
            </div>

            <div className={`main-menu ${menuVisible ? 'main-menu-expanded' : ''}`}>
                <div className='menu-item'>Item 4</div>
                <div className='menu-item'>Item 5</div>
                <div className='menu-item'>Item 6</div>
            </div>
        </div>
    );
}
