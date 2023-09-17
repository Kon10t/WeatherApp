import React, { useEffect, useState, FC } from 'react';
import WeatherForecastCard from './WeatherForecastCard';

import './weatherStyle.css';
import { useAppDispatch } from '../hook';
import { fetchForecastWeather } from '../redux/weatherSlice';
import { Button } from 'semantic-ui-react';

export default function WeatherForecastCards() {
  const [slideValue, setSlideValue] = useState(0);

  const dispatch = useAppDispatch();

  const APIkey: string = '124f4869ee7d90fb1d1ca27b7455d472';
  const weatherApiUrl: string = `https://api.openweathermap.org/data/2.5/forecast?lat=55.27&lon=37.84&lang=ru&appid=${APIkey}`;
  
  useEffect(() => {
    dispatch(fetchForecastWeather());
  }, [dispatch]);

  const changeSlide = (value: number) => {
    setSlideValue(prevValue => prevValue - value);
  }

  return (
    <>
      <div className='slider-btns'>
        { slideValue > 0 ?
            <ButtonLeft changeSlide={changeSlide} /> :
            <ButtonRight changeSlide={changeSlide} />
        }
      </div>
      <div className='forecast-slider'
        style={{ transform: `translateX(-${slideValue}%)` }}>
        <div className='slider-card'>
          <WeatherForecastCard />
        </div>
      </div>
    </>
  )
}

const ButtonLeft: React.FC<{ changeSlide: any }> = ({ changeSlide }) => {

  return (
    <input type="button" value="prev" className='slider-button-left' onClick={() => changeSlide(100)}/>
  )
}

const ButtonRight: React.FC<{ changeSlide: any }> = ({ changeSlide }) => {

  return (
    <input type="button" value="next" className='slider-button-right' onClick={() => changeSlide( (-100) )}/>
  )
}