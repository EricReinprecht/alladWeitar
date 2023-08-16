import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/homepage/Home';
import FestPage from './components/pages/FestPage';
import ErrorPage from './components/pages/ErrorPage';
import Navbar from './components/NavBar/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/fest/:festname" element={<FestPage />} exact={true} />
        <Route path="/404" element={<ErrorPage />} exact={true} />
      </Routes>
    </Router>
  );
}

