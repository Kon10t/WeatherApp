import React, { useEffect, useState } from 'react';
import WeatherForecastCard from './WeatherForecastCard';

import '../css/weatherStyle.css';
import { useAppDispatch } from '../hook';
import { WeatherDataProps } from '../commonTypes';
import { setWeatherForecastData, fetchData } from '../redux/weatherSlice';

function api(url: string) {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json()
    })
}

export default function WeatherForecastCards() {
  const dispatch = useAppDispatch();

  const APIkey: string = '124f4869ee7d90fb1d1ca27b7455d472';
  const weatherApiUrl: string = `https://api.openweathermap.org/data/2.5/weather?lat=55.27&lon=37.84&lang=ru&appid=${APIkey}`;
  // const [weatherData, setWeatherData] = useState<WeatherDataProps[]>([]);

  useEffect(() => {
    // const fetchData = async () => {
      // try {
        // const data = await api(weatherApiUrl);
        // setWeatherData(data);
        dispatch(fetchData());
        // console.log(data);
      // } catch (error) {
      //   console.error('Ошибка при получении данных', error);
      // }
    // }

    // fetchData();
    // console.log('legitCheck');
  }, [dispatch]);
  
  return (
    <div className='forecast-slider'
    style={{ transform: `translateX()` }}>
      {/* {`weatherData: ${JSON.stringify(weatherData)}`} */}
      <WeatherForecastCard />
    </div>
  )
}