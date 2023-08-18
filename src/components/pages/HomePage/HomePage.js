import React, { useState } from 'react';
import '../../../App.css';
import './Home.css';
import moment from 'moment';
import PartyDisplay from '../../PartyDisplay/PartyDisplay';

export default function HomePage({ results }) {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className='home-page'>
            {/* Menu Button */}
            <div className='menu-button' onClick={toggleMenu}>
                Menu
            </div>

            {/* Menu Content */}
            <div className={`menu ${menuVisible ? 'menu-expanded' : 'menu-collapsed'}`}>
                {/* Add your menu items here */}
                <div className='menu-item'>Item 1</div>
                <div className='menu-item'>Item 2</div>
                <div className='menu-item'>Item 3</div>
            </div>

            {/* Party Display */}
            <div className='defaultFestList'>
                <PartyDisplay results={results} />
            </div>
        </div>
    );
}
