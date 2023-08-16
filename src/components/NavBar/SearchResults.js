import React from "react";

const SearchResults = ({ results }) => {
  return (
      <div className="results-list">
        {results.map((result, id) => (
            <div key={id}>{result.name}</div>
        ))}
      </div>
  );
};

export default SearchResults;
