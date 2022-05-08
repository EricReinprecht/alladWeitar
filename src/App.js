import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import './App.css'
import Home from './components/pages/Home'
import FestPage from "./components/pages/FestPage";
import CalendarPage from "./components/pages/CalendarPage";
import Contact from "./components/pages/Contact";
import SignUp from "./components/pages/SignUp";
import ErrorPage from "./components/pages/ErrorPage";

export default function App() {

  return (
    <Router>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/fest/:festname" element={<FestPage />} exact={true} />
          <Route path="/calendar" element={<CalendarPage />} exact={true} />
          <Route path="/contact" element={<Contact />} exact={true} />
          <Route path="/sign-up" element={<SignUp />} exact={true} />

          <Route path="*" element={<ErrorPage />} exact={true}/>
      </Routes>
    </Router>
  );
}

