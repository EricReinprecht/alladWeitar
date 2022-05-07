import React from "react";
import "../../App.css";
import "./Fest.css";
import { useParams, useNavigate } from "react-router-dom";
import FestMainInfos from "../FestMainInfos";
import FestOtherInfos from "../FestOtherInfos";
import { useState, useEffect } from "react";

import Fester from "../Fester.json";

export default function Fest(props) {
  let { festname } = useParams();

  let data = Fester.filter((fest) => fest.name === festname);

  let printOtherInfos = () => {
    data.forEach(element => {
      console.log("1")
      
    });
  }
  


  return (
    printOtherInfos(),
    <>
      <div className="fest-main">
        <div className="fest-display">
          <div className="header">{data[0].name}</div>
          <div className="infos">
            <div className="infos-main">
              <div className="info location">Location: {data[0].fest[0].location}</div>
              <div className="info date">Date: {data[0].fest[0].date}</div>
              <div className="info startTime">Beginn: {data[0].fest[0].startTime}</div>
            </div>
            <div className="infos-other">
              <div className="otherInfos">
                {data[0].fest[0].otherInfos[1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}