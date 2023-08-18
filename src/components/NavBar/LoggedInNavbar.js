import { Link, useNavigate } from "react-router-dom";
import {useUsername} from '../../useUsername'; // Import useUserContext
import "./Navbar.css";
import React from "react";
import Searchbar from "./Searchbar";

const LoggedInNavbar = ({setResults, user}) => {
    const { username } = useUsername(user);
    const navigate = useNavigate(); // Initialize useNavigate
    const handleLogout = () => {
        // Clear user data from localStorage and log out the user
        localStorage.removeItem('user');
    };


    return (
        <nav className="navbar">
            <Link to="/" id="logo">
                <div className="app-name">AlladWeitar</div>
            </Link>
            <div id={"searchbar"}><Searchbar setResults={setResults}/></div>
            <ul id="list">
                <li><a href={"/"}>Filter</a></li>
                <li><a href={"/"}>{username}</a></li>
                <li><a href={"/"}>Cards</a></li>
                <li><a href={'/'} onClick={handleLogout}>Logout</a></li>
            </ul>
        </nav>
    );
};

export default LoggedInNavbar;
