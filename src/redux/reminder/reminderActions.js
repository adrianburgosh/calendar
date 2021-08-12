// import fetch from 'node-fetch';
import { CREATE_REMINDER, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './reminderTypes';

export const createReminder = reminder => {
	return {
		type: CREATE_REMINDER,
		payload: reminder,
	};
};
export const fetchWeatherRequest = reminder => {
	return {
		type: FETCH_WEATHER_REQUEST,
		payload: reminder,
	};
};
export const fetchWeatherSuccess = reminder => {
	return {
		type: FETCH_WEATHER_SUCCESS,
		payload: reminder,
	};
};
export const fetchWeatherFeilure = error => {
	return {
		type: FETCH_WEATHER_FAILURE,
		payload: error,
	};
};
