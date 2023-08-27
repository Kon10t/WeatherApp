import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type TPayload = {
  base: string,
  clouds: {
    all: number
  },
  cod: number,
  coord: {
    lon: number,
    lat: number
  },
  dt: bigint,
  id: number,
  main: {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
  },
  name: string,
  sys: {
    country: string,
    id: number,
    sunrise: bigint,
    sunset: bigint,
    type: number
  },
  timezone: number,
  visibility: number,
  weather: [{id: number, main: string, description: string, icon: string}],
  wind: {},
};

type WeathersState = {
  WeatherForecastData: TPayload | null,
  status: 'loading' | 'failed' | 'idle';
}

const initialState: WeathersState = {
  WeatherForecastData: null,
  status: 'idle',
};

const APIkey: string = '124f4869ee7d90fb1d1ca27b7455d472';
const weatherApiUrl: string = `https://api.openweathermap.org/data/2.5/weather?lat=55.27&lon=37.84&lang=ru&appid=${APIkey}`;

export const fetchData = createAsyncThunk(
  'weather/fetchData',
  async () => {
    // const res = await fetchPullOut(weatherApiUrl);
    const res = await fetch(weatherApiUrl);

    return res.json();
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherForecastData: (state, action: PayloadAction<TPayload>) => {
      state.WeatherForecastData = action.payload;
      console.log(state.WeatherForecastData);
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<TPayload>) => {
        state.status = 'idle';
        state.WeatherForecastData = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setWeatherForecastData } = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;
