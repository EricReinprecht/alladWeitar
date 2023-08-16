import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchResults = ({results}) => {

  return (
    <>
    <div className="results-list">
        {results.map((result, id) => {
            return <div key={id}>{result.name}</div>
        })}
    </div>
    </>
  );
};

export default SearchResults;
