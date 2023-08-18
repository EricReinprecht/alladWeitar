import React, { useState } from 'react';
import '../../../App.css';
import './FilterMenu.css';
import {BiSolidRightArrow} from "react-icons/bi"; // Import a menu icon from a library like Font Awesome

export default function FilterMenu({ results }) {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (

        <div className='filter-menu'>
            <div className={`menu ${menuVisible ? 'menu-expanded' : ''}`}>
                <div className='menu-item'>Item 1</div>
                <div className='menu-item'>Item 2</div>
                <div className='menu-item'>Item 3</div>
            </div>

            <div className={`menu-button ${menuVisible ? 'menu-button-expanded' : ''}`} onClick={toggleMenu}>
                <BiSolidRightArrow /> {/* Use a menu icon */}
            </div>
        </div>
    );
}
