import '../../../App.css';
import './Home.css';
import PartyDisplay from '../../PartyDisplay/PartyDisplay';
import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import FilterMenu from '../../SideMenus/Filter/FilterMenu';
import MainMenu from '../../SideMenus/MainMenu/MainMenu';
import Cookies from 'js-cookie';

export default function HomePage({ user: initialUser, results }) {
    const [username, setUsername] = useState('');
    const db = getFirestore();
    const rememberedUser = Cookies.get('rememberedUser');
    const user = rememberedUser ? JSON.parse(rememberedUser) : initialUser;
    const [isLoading, setIsLoading] = useState(!user); // Set loading state initially if user is not available

    useEffect(() => {
        if (user) {
            const fetchUsername = async () => {
                try {
                    const userDocRef = doc(db, 'users', user.uid);
                    const userDocSnap = await getDoc(userDocRef);
                    if (userDocSnap.exists()) {
                        setUsername(userDocSnap.data().username);
                    }
                    setIsLoading(false); // Data fetching done, set loading to false
                } catch (error) {
                    console.error('Error fetching username:', error);
                }
            };

            fetchUsername();
        }
    }, [user, db]);

    if (isLoading) {
        return <div className='home-page'>
            {/* Party Display */}
            <div className='defaultFestList'>
                <PartyDisplay results={results} />
            </div>
            <FilterMenu/>
            <MainMenu/>
        </div>
    }

    return (
        <div className='home-page'>
            <div className='defaultFestList'>
                <PartyDisplay results={results} />
            </div>
            <FilterMenu />
            <MainMenu />
            <div>{user.email}</div>
            <div>{username}</div>
        </div>
    );
}
