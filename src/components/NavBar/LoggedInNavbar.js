
import { Link } from "react-router-dom";
import {useUsername} from '../../useUsername'; // Import useUserContext
import "./Navbar.css";
import React from "react";
import Searchbar from "./Searchbar";

const LoggedInNavbar = ({setResults, user}) => {
    console.log(user);
    console.log(user.uid);
    const { username } = useUsername(user);
    console.log(username)

    return (
        <nav className="navbar">
            <Link to="/" id="logo">
                <div className="app-name">AlladWeitar</div>
            </Link>
            <div id={"searchbar"}><Searchbar setResults={setResults}/></div>
            <ul id="list">
                <li><a href={"/"}>Filter</a></li>
                <li><a href={"/"}>{username}</a></li>
                <li><a href={"/"}>purchase cart</a></li>
                <li><a href={"/"}>Cards</a></li>
            </ul>
        </nav>
    );
};

export default LoggedInNavbar;
