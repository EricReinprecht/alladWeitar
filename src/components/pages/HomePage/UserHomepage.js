import React, { useState } from 'react'
import '../../../App.css'
import'./Home.css'
import PartyDisplay from "../../PartyDisplay/PartyDisplay";


export default function UserHomepage({results}) {

    return (
        <>
            <div className='home-page'>
                <div className="defaultFestList"><PartyDisplay results={results}/>
                </div>
            </div>
        </>
    )
}

