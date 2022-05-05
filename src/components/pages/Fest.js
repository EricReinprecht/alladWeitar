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

  let data = Fester.filter((fest) => fest.name == festname);

  return (
    (
      <>
        <div className="fest-main">
          <div className="fest-display">
            <div className="header">{data[0].name}</div>
            <div className="infos">
              <div className="infos-main">
                <div className="info location">{data[0].fest[0].location}</div>
                <div className="info date">{data[0].fest[0].date}</div>
                <div className="info startTime">{data[0].fest[0].startTime}</div>
                <div className="info otherInfos">{data[0].fest[0].otherInfos}</div>
              </div>
              <div className="infos-other">
                <FestOtherInfos />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
