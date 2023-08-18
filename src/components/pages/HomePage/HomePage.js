import React, { useState } from 'react';
import '../../../App.css';
import './Home.css';
import moment from 'moment';
import PartyDisplay from '../../PartyDisplay/PartyDisplay';
import { FaBars } from 'react-icons/fa';
import FilterMenu from "../../SideMenus/Filter/FilterMenu";
import MainMenu from "../../SideMenus/MainMenu/MainMenu"; // Import a menu icon from a library like Font Awesome

export default function HomePage({ results }) {


    return (
        <div className='home-page'>
            {/* Party Display */}
            <div className='defaultFestList'>
                <PartyDisplay results={results} />
            </div>
            <FilterMenu/>
            <MainMenu/>
        </div>
    );
}
