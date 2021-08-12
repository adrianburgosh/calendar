import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';
import Reminder from './components/Reminder/Reminder';
import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/reminder/:date">
					<Reminder />
				</Route>
				<Route path="/">
					<Calendar />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
