interface WeatherDataProps {
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
}

export { WeatherDataProps };