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
                <div key={result.id} className={"party"} onClick={() => routeToParty(result)}>
                    <div className={"party-info"}>{result.name}</div>
                    <div className={"party-info"}>{result.startDate
                            ? new Date(result.startDate).toLocaleDateString('de-DE', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric',
                            })
                            : 'N/A'}</div>
                </div>
            ))}
        </div>
    );
};


export default SearchResults;
