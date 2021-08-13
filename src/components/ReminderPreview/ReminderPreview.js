import React from 'react';
import { connect } from 'react-redux';
import { deleteReminder } from '../../redux';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './ReminderPreview.css';

export const ReminderPreview = props => {
	let { reminder } = props;
	const useStyles = makeStyles({
		reminderPreview: {
			alignItems: 'center',
			backgroundColor: reminder.color,
			border: 0,
			borderRadius: 5,
			boxShadow: '2px 3px 5px 2px ' + reminder.color + '4D',
			color: 'white',
			display: 'flex',
			justifyContent: 'space-between',
			margin: '0 0.25em',
			marginBottom: '0.5em',
			padding: '5px',
			paddingLeft: '10px',
			['@media (max-width:1550px)']: {
				display: 'block',
				textAlign: 'center',
			},
		},
	});
	const classes = useStyles();
	let finalDescription = reminder.description.length > 16 ? reminder.description.substring(0, 14) + '...' : reminder.description;
	return (
		<div className={classes.reminderPreview} onClick={() => console.log('delete reminder' + reminder.id)}>
			<span>{finalDescription}</span>
			<IconButton className="center-icon" size="small" aria-label="delete" onClick={() => props.deleteReminder(reminder)}>
				<DeleteIcon />
			</IconButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		deleteReminder: reminder => dispatch(deleteReminder(reminder)),
	};
};
export default connect(null, mapDispatchToProps)(ReminderPreview);