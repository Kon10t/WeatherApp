import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WeatherForecastList from './components/WeatherForecastList.tsx';

// Redux
import { Provider } from 'react-redux';
import store from './redux/index.ts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <WeatherForecastList />
  </Provider>
);