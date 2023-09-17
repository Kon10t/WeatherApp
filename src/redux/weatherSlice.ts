import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type TForecastData = {
  current: {
    cloud: number,
    condition: {
      code: number,
      text: string,
      icon: string
    },
    feelslike_c: number,
    feelslike_f: number,
    humidity: number,
    is_day: number,
    last_updated: string,
    precip_in: number,
    precip_mm: number,
    pressure_in: number,
    pressure_mb: number,
    temp_c: number,
    temp_f: number,
    uv: number,
    wind_degree: number,
    wind_dir: string,
    wind_kph: number,
    wind_mph: number
  },
  forecast: {
    forecastday: [
      {
        astro: {
          is_moon_up: number,
          is_sun_up: number,
          moon_illumination: string,
          moon_phase: string,
          moonrise: string,
          moonset: string,
          sunrise: string,
          sunset: string
        }
        date: string,
        date_epoch: number,
        day: {
          maxtemp_c: number,
          maxtemp_f: number,
          mintemp_c: number,
          mintemp_f: number,
          avgtemp_c: number,
          avgtemp_f: number,
          maxwind_mph: number,
          maxwind_kph: number,
          totalprecip_mm: number,
          totalprecip_in: number,
          totalsnow_cm: number,
          avghumidity: number,
          daily_will_it_rain: number,
          daily_chance_of_rain: number,
          daily_will_it_snow: number,
          daily_chance_of_snow: number,
          condition: {
              text: string,
              icon: string,
              code: number
          }
        },
        hour: {
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          will_it_rain: number;
          chance_of_rain: number;
          will_it_snow: number;
          chance_of_snow: number;
        }
      }
    ]
  },
  location: {
    country: string,
    lat: number,
    localtime: string,
    localtime_epoch: number,
    lon: number,
    name: string,
    region: string,
    tz_id: string
  }
};

type WeathersState = {
  WeatherForecastData: TForecastData | null,
  status: 'loading' | 'failed' | 'idle';
}

const initialState: WeathersState = {
  WeatherForecastData: null,
  status: 'idle',
};

const APIkey: string = '1ffffbc4df8146f7a53122007231209';
const weatherForecastUrl: string = `http://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=55.27,37.84&days=3&lang=ru`;

export const fetchForecastWeather = createAsyncThunk(
  'weather/fetchForecastWeather',
  async () => {
    const forecastRes = await fetch(weatherForecastUrl)
    const data = await forecastRes.json();
    console.log(data);
    return data;
  }
);



const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherForecastData: (state, action: PayloadAction<TForecastData>) => {
      state.WeatherForecastData = action.payload;
      console.log(state.WeatherForecastData);
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchForecastWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchForecastWeather.fulfilled, (state, action: PayloadAction<TForecastData>) => {
        state.status = 'idle';
        state.WeatherForecastData = action.payload;
      })
      .addCase(fetchForecastWeather.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setWeatherForecastData } = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;
