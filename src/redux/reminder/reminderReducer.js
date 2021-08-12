import { CREATE_REMINDER } from './reminderTypes';

const initialState = {
	reminders: [],
};

const reminderReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_REMINDER:
			console.log(`state`, state);
			let reminders = state.reminders;
			reminders.push(action.payload);
			return {
				...state,
				reminders: reminders,
			};

		default:
			return state;
	}
};

export default reminderReducer;
