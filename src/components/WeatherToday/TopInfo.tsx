import React from "react";
import { useAppSelector } from "../../hook";

export default function TopInfo() {

  const { WeatherForecastData } = useAppSelector(state => state.weather);

  let lastUpd = WeatherForecastData?.current.last_updated.split(' ')[1];

  return (
    <div className="top-info">
        <p className="top-infoCurrentWeather">Текущая погода</p>
        <p className="top-infoLastUpd">{lastUpd && lastUpd}</p>
    </div>
  )
}