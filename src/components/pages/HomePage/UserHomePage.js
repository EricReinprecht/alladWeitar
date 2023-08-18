import '../../../App.css'
import './Home.css'
import PartyDisplay from "../../PartyDisplay/PartyDisplay";
import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import FilterMenu from "../../SideMenus/Filter/FilterMenu";
import MainMenu from "../../SideMenus/MainMenu/MainMenu"; // Import firestore related functions

export default function UserHomePage ({ user, results }){
    const [username, setUsername] = useState("");
    const db = getFirestore(); // Initialize Firestore

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const userDocRef = doc(db, "users", user.uid); // Assuming 'users' is your collection name
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                    setUsername(userDocSnap.data().username);
                }
            } catch (error) {
                console.error("Error fetching username:", error);
            }
        };

        fetchUsername();
    }, [user.uid, db]);

    return (
        <div className='home-page'>
            <div className="defaultFestList">
                <PartyDisplay results={results}/>
            </div>
            <FilterMenu/>
            <MainMenu/>
            <div>{user.email}</div>
            <div>{username}</div>
        </div>
    );
}
