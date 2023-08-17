// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import Navbar from './components/NavBar/Navbar';
import firebaseApp from './firebaseConfig'; // Import the Firebase configuration
import LoginPage from "./components/pages/LoginPage/LoginPage";

export default function App() {
    const [results, setResults] = useState([]); // Initialize state for search results

    return (
        <Router>
            <div id={"main"}>
                <Navbar setResults={setResults}/>
                <Routes>
                    <Route path="/" element={<HomePage results={results}/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/404" element={<ErrorPage />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                </Routes>
            </div>
        </Router>
    );
}
