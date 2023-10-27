import '../../../App.css';
import './MyPartiesPage.css';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

export default function MyPartiesPage() {
    const [createdParties, setCreatedParties] = useState([]);
    const [loading, setLoading] = useState(true);
    const rememberedUser = Cookies.get('rememberedUser') || sessionStorage.getItem('rememberedUser');
    const userObject = rememberedUser ? JSON.parse(rememberedUser) : null;
    const userUID = userObject?.uid;

    useEffect(() => {
        const fetchCreatedParties = async () => {
            if (!userUID) {
                setLoading(false);
                return;
            }

            const db = getFirestore();
            const userDocRef = doc(db, 'users', userUID);

            try {
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    const partyIds = userDocSnap.data().createdParties || [];

                    if (partyIds.length === 0) {
                        setCreatedParties([]);
                        setLoading(false);
                        return;
                    }

                    const partyDetails = [];
                    const partiesCollectionRef = collection(db, 'parties');
                    const partiesQuery = query(partiesCollectionRef, where('id', 'in', partyIds));
                    const partyDocs = await getDocs(partiesQuery);

                    partyDocs.forEach((partyDoc) => {
                        partyDetails.push(partyDoc.data());
                    });

                    setCreatedParties(partyDetails);
                    setLoading(false);
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching user document:', error);
                setLoading(false);
            }
        };

        fetchCreatedParties();
    }, [userUID]);

    return (
        <div className="my-parties-page">
            <div className="heading">Your Created Parties:</div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="party-display">
                    {createdParties.map((party) => (
                        <div className="party" key={party.id}>
                            <div className="party-info">{party.name}</div>
                            <div className="party-info">
                                {party.startDate
                                    ? new Date(party.startDate).toLocaleDateString('de-DE', {
                                        day: '2-digit',
                                        month: 'long',
                                        year: 'numeric',
                                    })
                                    : 'N/A'}
                            </div>
                            <div className="party-info">
                                Created: {" " + (party.createdAt
                                ? `${party.createdAt.toDate().getDate()}. ${party.createdAt.toDate().toLocaleString('default', { month: 'long' })} ${party.createdAt.toDate().getFullYear()}`
                                : 'N/A')}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
