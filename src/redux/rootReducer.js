import { combineReducers } from 'redux';
import reminderReducer from './reminder/reminderReducer';

const rootReducer = combineReducers({
	reminder: reminderReducer,
});

export default rootReducer;
