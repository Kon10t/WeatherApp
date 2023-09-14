import React, { FC } from "react";
import '../weatherStyle.css';

import { useAppSelector } from "../../hook";

const TempMax: React.FC<{ max: number }> = ({ max }) => {

  return (
    <div>
      <p>{max}</p>
    </div>
  )
}

const TempMin: React.FC<{ min: number }> = ({ min }) => {

  return (
    <div>
      <p>{min}</p>
    </div>
  )
}

export default function CardTemp() {

  const weatherForecastData = useAppSelector(state => state.weather.WeatherForecastData);

  return (
    <div className="card-left-temp">
      {weatherForecastData && (
        <>
          <TempMax max={weatherForecastData?.main?.temp_max} />
          <TempMin min={weatherForecastData?.main?.temp_min} />
        </>
      )}
    </div>
  )
}
