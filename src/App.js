import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';
import Reminder from './components/Reminder/Reminder';
import store from './redux/store';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/reminder/edit/:id">
						<Reminder />
					</Route>
					<Route path="/reminder/:date">
						<Reminder />
					</Route>
					<Route path="/">
						<Calendar />
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
