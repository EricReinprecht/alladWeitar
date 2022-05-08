import React from "react";
import "../../App.css";
import "./FestPage.css";
import Fest from "../Fest.js"
import { useParams, useNavigate } from "react-router-dom";


import Fester from "../Fester.json";

export default function FestPage(props) {
  let { festname } = useParams();

  let data = Fester.filter((fest) => fest.name === festname);

  let fester = []; //Falls mehr als 1 Fest, div wird ausgegeben Fest wird erstellt über Fest.js, Fester werden als Fest component in Array gspeichert


  let getFest = () => {
    let i = 0;
    while(data[0].fest[i]){
      fester.push(<Fest fest={data[0].fest[i]}/>)
      i++;
    }
  }

  
  


  return (
    getFest(),
    <>
    <div className="festpage-main">
      <div className="header">{festname}</div>
      <div className="fester">
        {fester}
      </div>
    </div>  
    </>
  );
}
