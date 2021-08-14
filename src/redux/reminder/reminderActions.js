import { CREATE_REMINDER, DELETE_REMINDER, UPDATE_REMINDER } from './reminderTypes';

export const createReminder = reminder => {
	return {
		type: CREATE_REMINDER,
		payload: reminder,
	};
};
export const updateReminder = reminder => {
	return {
		type: UPDATE_REMINDER,
		payload: reminder,
	};
};
export const deleteReminder = reminder => {
	return {
		type: DELETE_REMINDER,
		payload: reminder,
	};
};
