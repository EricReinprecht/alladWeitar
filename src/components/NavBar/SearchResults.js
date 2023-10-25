import React from "react";
import "./SearchResults.css";
import { useNavigate } from 'react-router-dom';

const SearchResults = ({ results }) => {
    const navigate = useNavigate();

    const routeToParty = (result) => {
        navigate(`/party/${result.id}`);
    }

    return (
        <div className="results-list">
            {results.map((result) => (
                <div key={result.id} className={"result"} onClick={() => routeToParty(result)}>
                    <div className={"info"}>{result.name}</div>
                    <div className={"info"}>{result.startDate}</div>
                </div>
            ))}
        </div>
    );
};


export default SearchResults;
