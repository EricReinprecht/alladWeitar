import React from 'react';
import './PartyDisplay.css';
import SearchResults from "../NavBar/SearchResults";

export default function PartyDisplay({results}) { // Object destructuring for props
    console.log(results)
    return (
        <>
            <div className="display">
                <div className={"list"}>
                    <SearchResults results={results}/>
                </div>
            </div>
        </>

    );
}
