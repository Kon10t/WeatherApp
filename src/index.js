import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import WeatherForecastList from './components/WeatherForecastList.tsx';
import CurrentWeather from './components/WeatherToday/CurrentWeather';
import { Swipe } from './components/SwipeSymbol/SwipeSymbol';

// Redux
import { Provider } from 'react-redux';
import store from './redux/index.ts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div className='rama'>
      <CurrentWeather />
      <WeatherForecastList />
      <Swipe />
    </div>
  </Provider>
);