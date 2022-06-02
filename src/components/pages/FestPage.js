import React from "react";
import "../../App.css";
import "./FestPage.css";
import Fest from "../Fest.js"
import { useParams } from "react-router-dom";


import Fester from "../Fester.json";

export default function FestPage() {

  let { festname } = useParams();

  let data = Fester.filter((fest) => fest.name === festname);

  let fester = [];

  let getFest = () => {
    let i = 0;
    while(data[0].fest[i]){
      fester.push(<Fest fest={data[0].fest[i]}/>);
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
