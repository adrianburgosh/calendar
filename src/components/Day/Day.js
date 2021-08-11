import React from 'react';
import './Day.css';

function handleClick(event) {}

export default function Day({ dateDay, isToday, isOtherMonthDay }) {
	let displayClass = 'day-number';
	displayClass += isToday ? ' today' : '';
	displayClass += isOtherMonthDay ? ' other-month-day' : '';

	return (
		<div className="day" onClick={handleClick}>
			<span className={displayClass}>{dateDay}</span>
		</div>
	);
}
