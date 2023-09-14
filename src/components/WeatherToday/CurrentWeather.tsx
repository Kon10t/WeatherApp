import React from "react";
import TopInfo from "./TopInfo";
import Temp from "./Temp";

export default function CurrentWeather() {

  return (
    <div className="current-weather">
      <TopInfo />
      <Temp />
      {/* <BottomAdditionalInfo /> */}
    </div>
  )
}