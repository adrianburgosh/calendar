import DateFnsUtils from '@date-io/date-fns';
import { Button, Card, CardActions, CardContent, FormControl, Grid, Link, TextField, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useParams } from 'react-router';
import './Reminder.css';

export default function Reminder() {
	let { date } = useParams();
	let fullDate = date.split('-');
	let reminderDate = new Date(fullDate[0], fullDate[1], fullDate[2]);
	const [startDate, setStartDate] = useState(reminderDate);
	const [color, setColor] = useState('#f44336');
	const [country, setCountry] = useState('');
	const [region, setRegion] = useState('');
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
									<CirclePicker color={color || '#000'} onChangeComplete={setColor} onChange={() => console.log(color)} />
								</Grid>
							</Grid>
						</Typography>

						<FormControl fullWidth>
							<TextField id="standard-basic" label="Describe your reminder here" inputProps={{ maxLength: 30 }} />
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
								<Button submit variant="contained" color="primary" startIcon={<SaveIcon />}>
									Save
								</Button>
							</Grid>
							<Grid item xs={6}>
								<Link href="/" underline="none" color="secondary">
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
}
