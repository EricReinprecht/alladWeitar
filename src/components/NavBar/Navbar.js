
import { Link } from "react-router-dom";

import "./Navbar.css";
import React, { useState } from "react";
import Searchbar from "./Searchbar";

const Navbar = ({setResults}) => {

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="nav-item" id="logo">
                    <div className="app-name">AlladWeitar</div>
                </Link>
                <div className="nav-item" id={"filter"}>Filter</div>
                <div className="nav-item" id={"searchbar"}><Searchbar setResults={setResults}/></div>
                <div className="nav-item" id={"profile"}>Profile</div>
                <div className="nav-item" id={"cart"}>purchase cart</div>
                <div className="nav-item" id={"cards"}>Cards</div>
                <div className="menu-icon">&#9776;</div>
            </div>
        </nav>
    );
};

    export default Navbar;
