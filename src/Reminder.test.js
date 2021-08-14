// import form './redux/reminder/reminderActions'
import reminderReducer from './redux/reminder/reminderReducer';
// import { createReminder } from './redux/index';
import { CREATE_REMINDER } from './redux/reminder/reminderTypes';
// import form './redux/reminder/reminderTypes'

test('should return the initial state', () => {
	expect(reminderReducer(undefined, {})).toEqual({
		reminders: [],
	});
});

test('should handle a reminder being added to an empty state', () => {
	let state = { reminders: [] };
	let date = new Date();
	expect(
		reminderReducer(state, {
			type: CREATE_REMINDER,
			payload: {
				country: 'Guatemala',
				region: 'Guatemala',
				color: '#fff',
				dateTime: date,
				description: 'This is a description',
				id: 0,
			},
		})
	).toEqual({
		reminders: [
			{
				country: 'Guatemala',
				region: 'Guatemala',
				color: '#fff',
				dateTime: date,
				description: 'This is a description',
				id: 0,
			},
		],
	});
});
