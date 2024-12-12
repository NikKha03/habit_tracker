import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import { getStatistic, dueDate } from '../utils/dateParser';

import { MDBIcon, MDBBtn, MDBListGroupItem } from 'mdb-react-ui-kit';

import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

function ServerDay(props) {
	const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

	const isSelected = !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

	return (
		<Badge key={props.day.toString()} overlap='circular' badgeContent={isSelected ? '✅' : undefined}>
			<PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={[day]} />
		</Badge>
	);
}

export default function HabitStatistic({ habit }) {
	const requestAbortController = useRef(null);
	const [isLoading, setIsLoading] = useState(false);
	const [highlightedDays, setHighlightedDays] = useState([]);

	const initialValue = dayjs();

	const handleMonthChange = date => {
		if (requestAbortController.current) {
			requestAbortController.current.abort();
		}

		const [notAll, all] = dueDate(date, habit.countExecutions, getStatistic(habit.habitStatistics));

		// setIsLoading(true);
		setHighlightedDays([...notAll, ...all]);
	};

	useEffect(() => {
		// abort request on unmount
		return () => requestAbortController.current?.abort();
	}, []);

	return (
		<MDBListGroupItem noBorders style={{ backgroundColor: ' #2980b9', display: 'flex', flexDirection: 'column', alignItems: 'start' }} className='px-3 mb-2 rounded-3 d-flex justify-content-between align-items-center'>
			<Box style={{ width: '100%', color: 'white' }}>
				<h5 style={{ fontWeight: 900, marginBottom: 0 }}>{habit.name}</h5>
			</Box>

			<LocalizationProvider style={{ paddingRight: '50%' }} dateAdapter={AdapterDayjs}>
				<DateCalendar
					style={{ backgroundColor: '#ffffff', borderRadius: '10px', width: '100%', paddingRight: '50%' }}
					defaultValue={initialValue}
					// loading={isLoading}
					onMonthChange={handleMonthChange}
					// renderLoading={() => <DayCalendarSkeleton />}
					slots={{
						day: ServerDay,
					}}
					slotProps={{
						day: {
							highlightedDays,
						},
					}}
				/>
			</LocalizationProvider>
		</MDBListGroupItem>
	);
}
