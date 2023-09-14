import React from 'react';
import CardTitleDate from './CardTitleDate';
import CardLeft from './CardLeft/CardLeft';
import CardRight from './CardRight/CardRight';

import { useAppSelector } from '../hook';

import './weatherStyle.css';

const WeatherForecastCard = () => {

  // const { WeatherForecastData, WeatherCurrentData } = useAppSelector(state => state.weather);
  // if (WeatherForecastData != null && WeatherCurrentData != null) {
    // console.log(WeatherForecastData);
    // console.log(WeatherCurrentData);
  // }

  return (
    <div className='forecast-slide'>
      <CardTitleDate />
      <CardLeft />
    </div>
  )
}

export default WeatherForecastCard;