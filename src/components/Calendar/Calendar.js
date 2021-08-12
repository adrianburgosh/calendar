import React from 'react';
import Day from '../Day/Day';
import './Calendar.css';

export default function Calendar() {
	let today = new Date();
	let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

	let allDays = getPreviousDays(today);

	for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
		let yearMonthDate = today.getFullYear() + '-' + today.getMonth() + '-' + i;
		if (i === today.getDate()) {
			allDays.push(<Day dateDay={i} isToday date={yearMonthDate} key={yearMonthDate} />);
		} else {
			allDays.push(<Day dateDay={i} date={yearMonthDate} key={yearMonthDate} />);
		}
	}

	allDays = allDays.concat(getSubsequentDays(today));
	return (
		<div className="calendar">
			<div className="dayName">Sunday</div>
			<div className="dayName">Monday</div>
			<div className="dayName">Tuesday</div>
			<div className="dayName">Wednesday</div>
			<div className="dayName">Thursday</div>
			<div className="dayName">Friday</div>
			<div className="dayName">Saturday</div>
			{allDays}
		</div>
	);
}

function getPreviousDays(today) {
	let lastDayOfPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
	let previousDate = lastDayOfPreviousMonth.getDate();
	let curretWeekDay = lastDayOfPreviousMonth.getDay();
	let previousDays = [];
	for (let i = curretWeekDay; i >= 0 && i < 6; i--) {
		let yearMonthDate = lastDayOfPreviousMonth.getFullYear() + '-' + lastDayOfPreviousMonth.getMonth() + '-' + previousDate;
		previousDays.unshift(<Day dateDay={previousDate} isOtherMonthDay date={yearMonthDate} key={yearMonthDate} />);
		previousDate--;
	}
	return previousDays;
}

function getSubsequentDays(today) {
	let firstDayOfSubsequentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
	let subsequentDate = firstDayOfSubsequentMonth.getDate();
	let curretWeekDay = firstDayOfSubsequentMonth.getDay();
	let subsequentDays = [];
	for (let i = curretWeekDay; i > 0 && i <= 6; i++) {
		let yearMonthDate = firstDayOfSubsequentMonth.getFullYear() + '-' + firstDayOfSubsequentMonth.getMonth() + '-' + subsequentDate;
		subsequentDays.push(<Day dateDay={subsequentDate} isOtherMonthDay date={yearMonthDate} key={yearMonthDate} />);
		subsequentDate++;
	}
	return subsequentDays;
}