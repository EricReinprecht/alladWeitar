import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import './App.css'
import Home from './components/pages/Home'
import FestPage from "./components/pages/FestPage";
import ErrorPage from "./components/pages/ErrorPage";

export default function App() {

  return (
    <Router>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/fest/:festname" element={<FestPage />} exact={true} />
          <Route path="/404" element={<ErrorPage />} exact={true}/>
      </Routes>
    </Router>
  );
}

