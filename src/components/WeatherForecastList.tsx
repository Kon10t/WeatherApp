import React from 'react';
import '../css/weatherStyle.css';
import WeatherForecastCard from './WeatherForecastCards';

export default function WeatherForecastList() {
  return (
    <div className="forecast-wrapper">
      <WeatherForecastCard />
    </div>
  )
}