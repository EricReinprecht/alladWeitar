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

    const handleDateClick = date => {
        const dateStr = date.toISOString().split('T')[0];

        if (selectedDates.includes(dateStr)) {
            setSelectedDates(selectedDates.filter(selectedDate => selectedDate !== dateStr));
        } else {
            setSelectedDates([...selectedDates, dateStr]);
        }
    };

    return (
        <div className='filter-menu'>
            <div className={`menu ${menuVisible ? 'menu-expanded' : ''}`}>
                <DateFilter/>
                <div className='menu-item'>Item 2</div>
                <div className='menu-item'>Item 3</div>
            </div>

            <div className={`menu-button ${menuVisible ? 'menu-button-expanded' : ''}`} onClick={toggleMenu}>
                <BiSolidRightArrow />
            </div>
        </div>
    );
}
