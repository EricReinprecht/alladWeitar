import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import React, {useEffect, useState} from "react";
import Searchbar from "./Searchbar";
import Cookies from "js-cookie";
import {checkTokenExpirationAndRefresh, refreshIdToken} from "../../checkTokenExpirationAndRefresh"


const Navbar = ({setResults, user}) => {
    const navigate = useNavigate(); // Initialize useNavigate
    const rememberedUser = Cookies.get('rememberedUser');
    const sessionUser = sessionStorage.getItem('rememberedUser')
    const [isLoading, setIsLoading] = useState(!user); // Set loading state initially if user is not available

    const handleLogout = () => {
        checkTokenExpirationAndRefresh(user);
        Cookies.remove('rememberedUser');
        sessionStorage.removeItem('rememberedUser')
    };

    useEffect(() => {
        console.log(rememberedUser)
    }, []);

    const handleToken = () => {
        console.log("hallo")
        refreshIdToken(user);
    };

    if (rememberedUser!=null || sessionUser!=null) {
        return <nav className="navbar">
            <Link to="/" id="logo">
                <div className="app-name">AlladWeitar</div>
            </Link>
            <div id={"searchbar"}><Searchbar setResults={setResults}/></div>
            <ul id="list">
                <li><a onClick={handleToken}>Filter</a></li>
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

export default Navbar;
