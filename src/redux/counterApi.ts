// import { WeatherDataProps } from "../commonTypes";

// const APIkey: string = '124f4869ee7d90fb1d1ca27b7455d472';
// const weatherApiUrl: string = `https://api.openweathermap.org/data/2.5/weather?lat=55.27&lon=37.84&lang=ru&appid=${APIkey}`;

// export const fetchPullOut = async (url: string) => new Promise<WeatherDataProps>(
//   r => setTimeout(() => r(
//     fetch(weatherApiUrl)
//     .then((res) => { 
//       if (!res.ok) {
//         throw new Error('Error' + res.statusText);
//       }

//       return res.json()
//     })
//   ))
// )

