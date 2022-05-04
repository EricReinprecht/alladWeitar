import React from 'react'
import Fester from './Fester.json'
import Info from './Info';

function FestMainInfos(props) {
  let id = 1 -1; // muss weitergegebne werden

  let infos = [];
  let Infos = [];


  let getInfos = () => {
    Fester[0].fest.forEach(info => {
        infos.push(info);
    });
  }

  let displayInfos = () => {
    infos.forEach(info => {
      console.log(info)
      
    })
  }
  

  return (
    getInfos(),
    displayInfos(),
    console.log(infos),
    <>
    <div className='main-infos'>
    </div>
    </>
  )
}

export default FestMainInfos