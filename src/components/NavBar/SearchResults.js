import React from "react";
import "./SearchResults.css"

const SearchResults = ({ results }) => {
  return (
      <div className="results-list">
        {results.map((result, id) => (
            <div key={id} className={"result"}>
                <div className={"info"}>{result.name}</div>
                <div className={"info"}>{result.startDate}</div>
            </div>
        ))}
      </div>
  );
};

export default SearchResults;
