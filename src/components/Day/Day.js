import React from 'react';
import { useHistory } from 'react-router-dom';
import './Day.css';

export default function Day(props) {
	const history = useHistory();
	function handleClick(event) {
		history.push('/reminder/' + date);
	}
	let { dateDay, isToday, isOtherMonthDay, date } = props;
	let displayClass = 'day-number';
	displayClass += isToday ? ' today' : '';
	displayClass += isOtherMonthDay ? ' other-month-day' : '';

	return (
		<div className="day">
			<div className="reminder-link" onClick={handleClick}></div>
			<span className={displayClass}>{dateDay}</span>
			<div className="z-index-1">{props.children}</div>
		</div>
	);
}
