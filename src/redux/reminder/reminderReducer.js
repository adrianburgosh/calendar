import { CREATE_REMINDER, DELETE_REMINDER, UPDATE_REMINDER } from './reminderTypes';

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
			for (let i = 0; i < reminders.length; i++) {
				if (reminders[i].id === action.payload.id) {
					reminders.splice(i, 1);
				}
			}
			return {
				...state,
				reminders: reminders,
			};

		default:
			return state;
	}
};

export default reminderReducer;
