import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar"; // Make sure the path to SearchBar is correct
import SearchResults from "./SearchResults"; // Make sure the path to SearchBar is correct
import "./Navbar.css"

const Navbar = () => {
  const [results, setResults] = useState([]); // Initialize state for search results

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="app-name">AlladWeitar</div>
        </Link>
        <div>Filter</div>
        <SearchBar setResults={setResults} />
        <SearchResults results={results}/>
        <div>Profile</div>
        <div>purchase cart</div>
        <div>Cards</div>
      </div>
    </nav>
  );
};

export default Navbar;
