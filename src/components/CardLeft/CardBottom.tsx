import React from 'react';
import { CardImg } from './CardImg';
import CardTemp from './CardTemp';

import '../weatherStyle.css';
import { useAppSelector } from '../../hook';

interface TIcon {
  icon: string,
  maxTemp: number,
  minTemp: number
}

export default function CardBottom({icon, maxTemp, minTemp} : TIcon) {

  const { WeatherForecastData } = useAppSelector(state => state.weather);

  const forecastData = WeatherForecastData?.forecast

  return (
    <div className='card-bottom'>
      <img src={icon} alt='weather-icon' />
      <div className='card-bottom-temp'>
        <p>{maxTemp}</p>
        <p>{minTemp}</p>
      </div>
    </div>
  )
}