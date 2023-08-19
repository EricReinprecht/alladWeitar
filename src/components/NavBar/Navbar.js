
import { Link } from "react-router-dom";

import "./Navbar.css";
import React from "react";
import Searchbar from "./Searchbar";

const Navbar = ({setResults}) => {


    return (
        <nav className="navbar">
                <Link to="/" id="logo">
                    <div className="app-name">AlladWeitar</div>
                </Link>
                <div id={"searchbar"}><Searchbar setResults={setResults}/></div>

                    <ul id="list">
                        <li><a href={"/"}>Filter</a></li>
                        <li><a href={"/login"}>Login</a></li>
                        <li><a href={"/"}>purchase cart</a></li>
                        <li><a href={"/"}>Cards</a></li>
                    </ul>


        </nav>
    );
};

    export default Navbar;
