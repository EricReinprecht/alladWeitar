import { Link, useNavigate } from "react-router-dom";
import {useUsername} from '../../useUsername'; // Import useUserContext
import "./Navbar.css";
import React, {useState} from "react";
import Searchbar from "./Searchbar";
import Cookies from "js-cookie";
import PartyDisplay from "../PartyDisplay/PartyDisplay";
import FilterMenu from "../SideMenus/Filter/FilterMenu";
import MainMenu from "../SideMenus/MainMenu/MainMenu";

const LoggedInNavbar = ({setResults, user}) => {
    const navigate = useNavigate(); // Initialize useNavigate
    const rememberedUser = Cookies.get('rememberedUser');
    const [isLoading, setIsLoading] = useState(!user); // Set loading state initially if user is not available


    const handleLogout = () => {
        // Clear user data from localStorage and log out the user
        Cookies.remove('rememberedUser');
    };

    if (rememberedUser!=null) {
        return <nav className="navbar">
            <Link to="/" id="logo">
                <div className="app-name">AlladWeitar</div>
            </Link>
            <div id={"searchbar"}><Searchbar setResults={setResults}/></div>
            <ul id="list">
                <li><a href={"/"}>Filter</a></li>
                <li><a href={"/"}>{"Loggedin"}</a></li>
                <li><a href={"/"}>Cards</a></li>
                <li><a href={'/'} onClick={handleLogout}>Logout</a></li>
            </ul>
        </nav>
    }else{
        return  <nav className="navbar">
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
    }


};

export default LoggedInNavbar;
