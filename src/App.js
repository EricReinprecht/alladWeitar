import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/pages/homepage/Home';
import FestPage from './components/pages/FestPage';
import ErrorPage from './components/pages/ErrorPage';
import Navbar from './components/NavBar/Navbar';
import firebaseConfig from './firebaseConfig';
import { initializeApp } from "firebase/app";


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

    const [results, setResults] = useState([]); // Initialize state for search results


    return (
        <Router>
            <div id={"main"}>
                <Navbar setResults={setResults}/>
                <Routes>
                    <Route path="/" element={<Home results={results}/>} />
                    <Route path="/fest/:festname" element={<FestPage />} />
                    <Route path="/404" element={<ErrorPage />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                </Routes>
            </div>
        </Router>
    );
}
