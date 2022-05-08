import React from "react";
import "../App.css";
import OtherInfo from "./OtherInfo";

export default function Fest(props) {

    let otherInfos = [];

    let getOtherInfos = () => {
        let i = 0;
        while(props.fest.otherInfos[i]){
            otherInfos.push(<OtherInfo info={props.fest.otherInfos[i]}/>);
            i++;
        }
      }

  return (
    getOtherInfos(),
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
                {otherInfos}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}