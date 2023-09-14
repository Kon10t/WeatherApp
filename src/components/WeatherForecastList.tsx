import React from 'react';
import './weatherStyle.css';
import WeatherForecastCard from './WeatherForecastCards';

export default function WeatherForecastList() {
  return (
    <div className="forecast-wrapper">
      <WeatherForecastCard />
    </div>
  )
}