import React from "react";
import Cloud from './Cloud.svg';

export default function Temp() {
  
  return (
    <div className="temp">
      <div className="temp-left">
        <img src={Cloud} alt="GrayCloud" />
      </div>
      <div className="temp-right">
        <p className="temp-right-top">30 C</p>
        <p className="temp-right-bottom">Солнечно</p>
      </div>
    </div>
  )
}