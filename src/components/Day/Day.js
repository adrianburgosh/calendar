import React from 'react';
import { Link } from 'react-router-dom';
import './Day.css';

function handleClick(event) {}

export default function Day({ dateDay, isToday, isOtherMonthDay, date }) {
	let displayClass = 'day-number';
	displayClass += isToday ? ' today' : '';
	displayClass += isOtherMonthDay ? ' other-month-day' : '';

	return (
		<Link to={'/reminder/' + date} className="day" onClick={handleClick}>
			<span className={displayClass}>{dateDay}</span>
		</Link>
	);
}
