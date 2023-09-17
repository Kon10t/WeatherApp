import React from 'react';
import CardBottom from './CardLeft/CardBottom';

import { useAppSelector } from '../hook';

import './weatherStyle.css';
import { element } from 'prop-types';

function getDayOfWeek(data: string) {
  let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  let numberOfWeek: number = new Date(data).getDay();
  return daysOfWeek[numberOfWeek];
}

function slideStretch(index: number) {
  const forecastSlide = document.querySelectorAll('.forecast-slide');
  forecastSlide.forEach((element, index, array) => {
    element?.classList.remove('click');
  })
  forecastSlide[index]?.classList.add('click');
}

const WeatherForecastCard = () => {

  const { WeatherForecastData } = useAppSelector(state => state.weather);
  const daysOfWeek = WeatherForecastData?.forecast?.forecastday

  return (
    <>
      {daysOfWeek?.map((forecast, index, array) => (
        <div className='forecast-slide' onClick={() => slideStretch(index)}>
          <div className='card-title'>
            <p key={index}>{getDayOfWeek(forecast?.date)}</p>
          </div>
          <CardBottom icon={forecast?.day?.condition?.icon} maxTemp={forecast?.day?.maxtemp_c} minTemp={forecast?.day?.mintemp_c} />
        </div>
      ))}
    </>
  )
}

export default WeatherForecastCard;