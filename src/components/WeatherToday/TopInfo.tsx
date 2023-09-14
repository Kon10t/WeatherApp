import React from "react";
import { useAppSelector } from "../../hook";

export default function TopInfo() {

  const { WeatherForecastData } = useAppSelector(state => state.weather);

  return (
    <div className="top-info">
      <div className="top-info-right">
        <p>Текущая погода</p>
        <p>{WeatherForecastData?.current.last_updated}</p>
      </div>
    </div>
  )
}