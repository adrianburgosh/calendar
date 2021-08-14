import { Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteAllRemindersByDay } from '../../redux';
import './Day.css';

export const Day = props => {
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
			{!props.children || <div className="reminder-link" onClick={handleClick}></div>}
			<div className="day-header">
				<span className={displayClass}>{dateDay}</span>
				{!(props.children && props.children.length > 0) || (
					<IconButton className="center-icon" size="small" aria-label="delete" onClick={() => props.deleteAllRemindersByDay(dateDay)}>
						<DeleteIcon />
					</IconButton>
				)}
			</div>
			<div className="z-index-1">{props.children}</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		deleteAllRemindersByDay: day => dispatch(deleteAllRemindersByDay(day)),
	};
};
export default connect(null, mapDispatchToProps)(Day);
