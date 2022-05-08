import React from "react";
import "../App.css";

import { useParams, useNavigate } from "react-router-dom";


import Fester from "./Fester.json";

export default function Fest(props) {
  let { festname } = useParams();

  return (
    <>
      <div className="fest-main">
        <div className="fest-display">
          <div className="infos">
            <div className="infos-main">
              <div className="info location">Location: {props.fest.location}</div>
              <div className="info date">Date: {props.fest.date}</div>
              <div className="info startTime">Beginn: {props.fest.startTime}</div>
            </div>
            <div className="infos-other">
              <div className="otherInfos">
                {props.fest.otherInfos[1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}