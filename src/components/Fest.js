import React from "react";
import "../App.css";
import OtherInfo from "./OtherInfo";
import "./Fest.css"

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
    <div className="fest-display">
      <div className="infos">
        <div className="infos-main">
          <div className="info location"><div className='text statement'>Ort</div><div className='text data'>: {props.fest.location}</div></div>
          <div className="info date"><div className='text statement'>Datum</div><div className='text data'>: {props.fest.date}</div></div>
          <div className="info startTime"><div className='text statement'>Wann</div><div className='text data'>: {props.fest.startTime}</div></div>
        </div>
        <div className="other-infos">
            {otherInfos}
        </div>
      </div>
    </div>
    </>
  );
}