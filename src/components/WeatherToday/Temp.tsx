import React from "react";
import { useAppSelector } from "../../hook";
import Cloud from './Cloud.svg';
import '../weatherStyle.css';


export default function Temp() {

  const { WeatherForecastData } = useAppSelector(state => state.weather);

  return (
    <div className="temp">
      <div className="temp-left">
        <img src={WeatherForecastData?.current?.condition?.icon} alt="weatherIcon" className="current-weather-icon" />
      </div>
      <div className="temp-center">
        <p className="temp-center-temp">{WeatherForecastData?.current?.temp_c}</p>
        <p className="temp-center-condition">{WeatherForecastData?.current?.condition?.text}</p>
      </div>
      <div className="temp-right">
        <p>Ощущается как: {WeatherForecastData?.current?.feelslike_c}</p>
      </div>
    </div>
  )
}