import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./PartyPage.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const PartyPage = () => {
    const { partyId } = useParams();
    const [partyData, setPartyData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const partyDocRef = doc(db, 'parties', partyId);
        getDoc(partyDocRef)
            .then((partySnapshot) => {
                if (partySnapshot.exists()) {
                    const data = partySnapshot.data();
                    setPartyData(data);
                } else {
                    setError("Party not found");
                }
            })
            .catch((error) => {
                setError("Error fetching party data: " + error.message);
            });
    }, [partyId]);

    return (
        <div className={"party-page"}>
            {error ? (
                <div>Error: {error}</div>
            ) : partyData ? (
                <div className={"party-infos"}>
                    <div className={"party-data"}>
                        <h1>{partyData.name}</h1>
                        <div>
                            <h2>Location: {partyData.location}</h2>
                            <h2>Date: {partyData.endDate !== partyData.startDate ? `${partyData.startDate} - ${partyData.endDate}` : `${partyData.startDate}`}</h2>
                            <h2>Start Time: {partyData.startTime}</h2>
                        </div>
                    </div>
                    <div className={"party-poster"}><img src={partyData.image} alt="Party Poster" className="party-image"/></div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default PartyPage;
