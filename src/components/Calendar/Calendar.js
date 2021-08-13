import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import Day from '../Day/Day';
import ReminderPreview from '../ReminderPreview/ReminderPreview';
import './Calendar.css';

export const Calendar = props => {
	const [allDays, setAllDays] = useState([]);
	const stateReminder = useSelector(state => state.reminder);
	useEffect(() => {
		let today = new Date();
		let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
		let days = getPreviousDays(today);
		let reminders = stateReminder.reminders;

		for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
			let yearMonthDate = today.getFullYear() + '-' + today.getMonth() + '-' + i;
			let daysReminders = [];
			let currentDayReminders = reminders.filter(reminder => {
				let { dateTime } = reminder;
				let reminderDate = new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate());
				let currentDate = new Date(today.getFullYear(), today.getMonth(), i);
				return reminderDate.getTime() === currentDate.getTime();
			});
			currentDayReminders = currentDayReminders.length > 0 ? orderReminders(currentDayReminders) : currentDayReminders;
			daysReminders = currentDayReminders.map(reminder => <ReminderPreview reminder={reminder} key={reminder.id} />);

			if (i === today.getDate()) {
				days.push(
					<Day dateDay={i} isToday date={yearMonthDate} key={yearMonthDate}>
						{daysReminders}
					</Day>
				);
			} else {
				days.push(
					<Day dateDay={i} date={yearMonthDate} key={yearMonthDate}>
						{daysReminders}
					</Day>
				);
			}
		}

		days = days.concat(getSubsequentDays(today));
		setAllDays(days);
	}, [stateReminder]);

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
};

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

function orderReminders(reminders) {
	let remindersList = [...reminders];
	for (let i = 0; i < remindersList.length; i++) {
		for (let j = i; j < remindersList.length; j++) {
			let date1 = new Date(remindersList[i].dateTime);
			let date2 = new Date(remindersList[j].dateTime);
			if (date1.getTime() > date2.getTime()) {
				let temp = remindersList[i];
				remindersList[i] = remindersList[j];
				remindersList[j] = temp;
			}
		}
	}
	return remindersList;
}

const mapStateToProps = state => {
	return {
		reminders: state.reminder.reminders,
	};
};

export default connect(mapStateToProps)(Calendar);
