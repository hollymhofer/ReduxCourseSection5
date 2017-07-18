import axios from 'axios';

const API_KEY = '18a8d930a1cc2140ab6bc395e1570b9b';
const ROOT_URL = `http://openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) { //action creator
  const url =  `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

