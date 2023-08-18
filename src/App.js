import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { initializeApp } from "firebase/app";
import UserHomePage from "./components/pages/HomePage/UserHomePage";
import Navbar from "./components/NavBar/Navbar";
import HomePage from "./components/pages/HomePage/HomePage";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import LoginPage from "./components/pages/LoginPage/LoginPage"; // Import logged-out navigation bar component
import { getFirestore } from "firebase/firestore";
import LoggedInNavbar from "./components/NavBar/LoggedInNavbar";
import RegisterPage from "./components/pages/RegisterPage/Register";

//TODO other way to handle stay logged in

export default function App() {
    const firebaseConfig = {
        apiKey: "AIzaSyABCLSYYF6tCso2OsmdKJJuhJgi6Qg1Jyw",
        authDomain: "alladweitarv2.firebaseapp.com",
        projectId: "alladweitarv2",
        storageBucket: "alladweitarv2.appspot.com",
        messagingSenderId: "518191545789",
        appId: "1:518191545789:web:f61bad63226c79dae7e6d4",
        measurementId: "G-SNC78NJ38K"
    };

    initializeApp(firebaseConfig);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [results, setResults] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    return (
            <Router>
                <div id={"main"}>
                    {user ? (<LoggedInNavbar user={user} setResults={setResults}/>) : (<Navbar setResults={setResults} />)}
                    <Routes>
                        <Route path="/" element={<HomePage results={results} />} />
                        <Route path="/login" element={<LoginPage setUser={setUser} />} />
                        <Route path="/register" element={<RegisterPage/>} />
                        <Route path="/user/:token" element={<UserHomePage user={user} results={results} />} />
                        <Route path="/404" element={<ErrorPage />} />
                        <Route path="*" element={<Navigate to="/404" />} />
                    </Routes>
                </div>
            </Router>

    );
}