import { CREATE_REMINDER, DELETE_ALL_REMINDERS_BY_DAY, DELETE_REMINDER, UPDATE_REMINDER } from './reminderTypes';

const initialState = {
	reminders: [],
};

const reminderReducer = (state = initialState, action) => {
	let reminders = [...state.reminders];
	switch (action.type) {
		case CREATE_REMINDER:
			reminders.push(action.payload);
			return {
				...state,
				reminders: reminders,
			};

		case UPDATE_REMINDER:
			reminders.forEach((reminder, index) => {
				if (reminder.id === action.payload.id) {
					reminders[index] = action.payload;
				}
			});
			return {
				...state,
				reminders: reminders,
			};

		case DELETE_REMINDER:
			let hasDeleted = false;
			for (let i = 0; i < reminders.length && !hasDeleted; i++) {
				let reminder = reminders[i];
				if (reminder.id === action.payload.id) {
					reminders.splice(i, 1);
					hasDeleted = true;
				}
			}
			return {
				...state,
				reminders: reminders,
			};

		case DELETE_ALL_REMINDERS_BY_DAY:
			const day = action.payload;
			let otherDaysReminders = reminders.filter(reminder => {
				let reminderDate = new Date(reminder.dateTime);
				return reminderDate.getDate() !== day;
			});
			return {
				...state,
				reminders: otherDaysReminders,
			};

		default:
			return state;
	}
};

export default reminderReducer;
