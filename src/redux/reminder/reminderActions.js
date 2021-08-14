import { CREATE_REMINDER, DELETE_REMINDER, UPDATE_REMINDER, DELETE_ALL_REMINDERS_BY_DAY } from './reminderTypes';

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
export const deleteAllRemindersByDay = day => {
	return {
		type: DELETE_ALL_REMINDERS_BY_DAY,
		payload: day,
	};
};
