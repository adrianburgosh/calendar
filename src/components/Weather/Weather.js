import React, { useEffect, useState } from 'react';
import { WeatherIconAPI } from '../../API/WeatherAPI';
import './Weather.css';

export default function Weather({ weather }) {
	let [icon, setIcon] = useState('');
	useEffect(() => {
		if (weather.weather) {
			WeatherIconAPI(weather.weather[0].icon).then(iconURL => {
				setIcon(iconURL.url);
			});
		}
	}, [weather]);
	return (
		<div className="weather">
			{weather.weather ? <img src={icon} alt="icon" /> : ''}
			<span>{weather.weather ? 'The weather is ' + weather.weather[0].main : 'No weather information'}</span>
		</div>
	);
}
