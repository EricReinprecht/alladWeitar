import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import './App.css'
import Home from './components/pages/Home'
import Fest from "./components/pages/Fest";
import Calendar from "./components/pages/Calendar";
import Contact from "./components/pages/Contact";
import SignUp from "./components/pages/SignUp";

export default function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/fest" element={<Fest />} exact={true} />
          <Route path="/calendar" element={<Calendar />} exact={true} />
          <Route path="/contact" element={<Contact />} exact={true} />
          <Route path="/contact" element={<SignUp />} exact={true} />
      </Routes>
    </Router>
  );
}

