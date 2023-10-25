import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { initializeApp } from "firebase/app";
import Navbar from "./components/NavBar/Navbar";
import HomePage from "./components/pages/HomePage/HomePage";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import { getFirestore } from "firebase/firestore";
import RegisterPage from "./components/pages/RegisterPage/Register";
import Cookies from "js-cookie";
import {checkTokenExpirationAndRefresh} from "./checkTokenExpirationAndRefresh";
import CreatePartyPage from "./components/pages/CreatePartyPage/CreatePartyPage";
import PartyPage from "./components/pages/PartyPage/PartyPage";

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
    const auth = getAuth(); // Initialize Firebase auth

    const [results, setResults] = useState([]);
    const [user, setUser] = useState(Cookies.get('rememberedUser') || null);
    const [authLoaded, setAuthLoaded] = useState(false); // Added state for auth loading


    useEffect(() => {
        // Listen for Firebase auth state changes
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
            setAuthLoaded(true); // Mark auth as loaded
        });

        return () => {
            unsubscribe();
        };
    }, [auth]);

    useEffect(() => {
        if (authLoaded && user) {
            // Check token expiration and refresh logic
            checkTokenExpirationAndRefresh(user)
                .then(() => {
                    console.log("Token check and refresh completed.");
                })
                .catch((error) => {
                    console.error("Token check and refresh error:", error);
                });
        }
    }, [authLoaded, user]);



    return (
            <Router>
                <div id={"main"}>
                    <Navbar setResults={setResults} user={user}/>
                    <Routes>
                        <Route path="/" element={<HomePage results={results} />} />
                        <Route path="/login" element={<LoginPage setUser={setUser} />} />
                        <Route path="/register" element={<RegisterPage/>} />
                        <Route path="/create" element={<CreatePartyPage/>} />
                        <Route path="/party/:partyId" element={<PartyPage/>} />
                        <Route path="/404" element={<ErrorPage />} />
                        <Route path="*" element={<Navigate to="/404" />} />

                    </Routes>
                </div>
            </Router>

    );
}