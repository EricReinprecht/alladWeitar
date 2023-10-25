import React from "react";
import { useParams } from 'react-router-dom';

const PartyPage = () => {
    const { id } = useParams(); // Get the party ID from the route parameter

    // Fetch party data based on the party ID and display it

    return (
        <div className={"party-page"}>
            <h1>Party Details for ID: {id}</h1>
            {/* Display party details here */}
        </div>
    );
};

export default PartyPage;
