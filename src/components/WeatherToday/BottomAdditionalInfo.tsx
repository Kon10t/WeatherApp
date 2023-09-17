import React from 'react';
import { useAppSelector } from '../../hook';

export default function BottomAdditionalInfo() {

  const { WeatherForecastData } = useAppSelector(state => state.weather);

  return (
    <div className='bottom-additional-info'>
      <p>Скорость ветра: {WeatherForecastData?.current?.wind_mph}</p>
      <p>Влажность: {WeatherForecastData?.current?.humidity}</p>
      <p>Давление: {WeatherForecastData?.current?.pressure_mb}</p>
    </div>
  )
}