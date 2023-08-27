import React from 'react';
import CardTitleDate from './CardTitleDate';
import CardLeft from './CardLeft/CardLeft';
import CardRight from './CardRight/CardRight';

import { useAppSelector } from '../hook';
import { WeatherDataProps } from '../commonTypes';

import '../css/weatherStyle.css';

const WeatherForecastCard = () => {
  const weatherForecastData = useAppSelector(state => state.weather.WeatherForecastData);
  // const data = weatherForecastData[0]?.base;
  // console.log(data);
  console.log(weatherForecastData?.base);
  
  
  // let arr: WeatherDataProps = weatherForecastData;

  // const newArr = () => {
  //   console.log(arr.clouds); // Вывод весь массив
  //     console.log(arr[0]?.base); // Вывод base первого объекта
  // }
  
  // newArr();

  // weatherForecastData.map((elem) => {
  //   return console.log(elem);
  // })

  return (
    <>
      {
        
      }
    </>
  )
}

export default WeatherForecastCard;