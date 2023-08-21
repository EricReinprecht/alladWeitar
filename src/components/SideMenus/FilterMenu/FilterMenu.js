import React, { useState } from 'react';
import '../../../App.css';
import './FilterMenu.css';
import './DateFilter.css';
import {BiSolidRightArrow} from "react-icons/bi";
import DateFilter from "./DateFilter";


export default function FilterMenu({ results }) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [selectedDates, setSelectedDates] = useState([]);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };


    return (
        <div className='filter-menu'>
            <div className={`filter-menu ${menuVisible ? 'filter-menu-expanded' : ''}`}>
                <DateFilter/>
                <div className='filter-menu-item'>Item 2</div>
                <div className='filter-menu-item'>Item 3</div>
            </div>

            <div className={`filter-menu-button ${menuVisible ? 'filter-menu-button-expanded' : ''}`} onClick={toggleMenu}>
                <BiSolidRightArrow />
            </div>
        </div>
    );
}
