import fetch from 'node-fetch';
import env from 'react-dotenv';

export function WeatherAPI(city) {
	return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${env.WEATHER_API_KEY}`).then(response =>
		response.json()
	);
}

export function WeatherIconAPI(icon) {
	return fetch(`https://openweathermap.org/img/wn/${icon}.png`);
}
