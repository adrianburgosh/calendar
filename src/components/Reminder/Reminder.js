import DateFnsUtils from '@date-io/date-fns';
import React, { useState, useEffect } from 'react';
import { Button, Card, CardActions, CardContent, FormControl, Grid, TextField, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import { CirclePicker } from 'react-color';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useParams } from 'react-router';
import './Reminder.css';
import { connect } from 'react-redux';
import { createReminder, updateReminder } from '../../redux';
import { Link, useHistory } from 'react-router-dom';

export const Reminder = props => {
	const history = useHistory();
	const { date, id } = useParams();

	const [description, setDescription] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [color, setColor] = useState('#f44336');
	const [country, setCountry] = useState('');
	const [region, setRegion] = useState('');

	useEffect(() => {
		let reminderDate = new Date();
		let currentReminder = null;
		if (date) {
			let fullDate = date.split('-');
			reminderDate = new Date(fullDate[0], fullDate[1], fullDate[2]);
		} else if (id) {
			currentReminder = props.reminders.find(reminder => reminder.id === parseInt(id));
			reminderDate = new Date(currentReminder.dateTime);
		}
		setDescription(currentReminder ? currentReminder.description : '');
		setStartDate(reminderDate);
		setColor(currentReminder ? currentReminder.color : '#f44336');
		setCountry(currentReminder ? currentReminder.country : '');
		setRegion(currentReminder ? currentReminder.region : '');
	}, []);

	function handleReminderAction(event) {
		let lastReminder = props.reminders[props.reminders.length - 1];
		let reminder = {
			country: country,
			region: region,
			color: color.hex || color,
			dateTime: startDate,
			description: description,
			id: id != null && id != undefined ? parseInt(id) : lastReminder ? lastReminder.id + 1 : 0,
		};
		if (date) {
			props.createReminder(reminder);
		} else if (id) {
			props.updateReminder(reminder);
		}
		history.push('/');
	}

	return (
		<div>
			<form noValidate autoComplete="off">
				<Card variant="outlined">
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							<Grid container spacing={3}>
								<Grid item xs={6}>
									Reminder or event
								</Grid>
								<Grid item xs={6}>
									<CirclePicker color={color || '#000'} onChangeComplete={setColor} />
								</Grid>
							</Grid>
						</Typography>

						<FormControl fullWidth>
							<TextField
								id="standard-basic"
								label="Describe your reminder here"
								inputProps={{ maxLength: 30 }}
								value={description}
								onChange={event => setDescription(event.target.value)}
								required={true}
							/>
						</FormControl>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Grid container spacing={3}>
								<Grid item xs={6}>
									<FormControl fullWidth>
										<KeyboardDatePicker
											margin="normal"
											id="date-picker-dialog"
											label="Date"
											format="MM/dd/yyyy"
											value={startDate}
											onChange={setStartDate}
											KeyboardButtonProps={{
												'aria-label': 'change date',
											}}
											required={true}
										/>
									</FormControl>
								</Grid>
								<Grid item xs={6}>
									<FormControl fullWidth>
										<KeyboardTimePicker
											margin="normal"
											id="time-picker"
											label="Time"
											value={startDate}
											onChange={setStartDate}
											KeyboardButtonProps={{
												'aria-label': 'change time',
											}}
											required={true}
										/>
									</FormControl>
								</Grid>
								<Grid item xs={6}>
									<FormControl>
										<CountryDropdown id="reminderCountry" value={country} onChange={setCountry} required />
									</FormControl>
								</Grid>
								<Grid item xs={6}>
									<FormControl>
										<RegionDropdown id="reminderRegion" country={country} value={region} onChange={setRegion} required />
									</FormControl>
								</Grid>
							</Grid>
						</MuiPickersUtilsProvider>
					</CardContent>
					<CardActions>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleReminderAction}>
									Save
								</Button>
							</Grid>
							<Grid item xs={6}>
								<Link to="/" className="cancel">
									<Button variant="contained" color="secondary" startIcon={<CloseIcon />}>
										Close
									</Button>
								</Link>
							</Grid>
						</Grid>
					</CardActions>
				</Card>
			</form>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		reminders: state.reminder.reminders,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createReminder: reminder => dispatch(createReminder(reminder)),
		updateReminder: reminder => dispatch(updateReminder(reminder)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Reminder);
