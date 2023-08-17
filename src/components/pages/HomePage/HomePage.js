import React, { useState } from 'react'
import '../../../App.css'
import'./Home.css'
import moment from 'moment'
import PartyDisplay from "../../PartyDisplay/PartyDisplay";


export default function HomePage({results}) {

  const [value, setValue] = useState(moment());
  const [selectedDates, setDates] = useState([]);
  const [fest, setFest] = useState();

  return (
    <>
      <div className='home-page'>
          <div className="defaultFestList"><PartyDisplay results={results}/>
        </div>
      </div>
    </>
    )
}

