import '../../../App.css'
import'./Home.css'
import PartyDisplay from "../../PartyDisplay/PartyDisplay";

import React from 'react';

export default function UserHomePage ({ user, results }){
    return (
        <div className='home-page'>
            <div className="defaultFestList">
                <PartyDisplay results={results}/>
            </div>
            <div>{user.email}</div>

        </div>
    );
};
