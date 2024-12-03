import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

import Habit from './Habit';
import { allHabitsPath, habitOnTheDayPath, habitOnTheWeekPath, habitDuePath } from '../ApiPath';

export default function ContentManagement({ obj }) {
	const [triggerEffect, setTriggerEffect] = useState(false);
	const [habits, setHabits] = useState([]);

	const requestCode = () => {
		switch (obj) {
			case 1:
				return getHabitOnTheDay();
			case 2:
				return getHabitOnTheWeek();
			case 3:
				return getAllHabits();
			case 4:
				return null;
			case 5:
				return null;
		}
	};

	useEffect(() => {
		if (triggerEffect) {
			setTriggerEffect(false);
			requestCode();
		}
		requestCode();
	}, [triggerEffect]);

	const getAllHabits = async () => {
		const response = await axios
			.get(allHabitsPath, { withCredentials: true })
			.then(response => {
				setHabits(response.data);
				// if (response.data.length === 0) setHabitIsEmpty(true);
			})
			.catch(error => {
				console.error('Error fetching data: ', error);
			});
	};

	const getHabitOnTheDay = async () => {
		const response = await axios
			.get(habitOnTheDayPath, { withCredentials: true })
			.then(response => {
				setHabits(response.data);
				// if (response.data.length === 0) setHabitIsEmpty(true);
			})
			.catch(error => {
				console.error('Error fetching data: ', error);
			});
	};

	const getHabitOnTheWeek = async () => {
		const response = await axios
			.get(habitOnTheWeekPath, { withCredentials: true })
			.then(response => {
				setHabits(response.data);
				// if (response.data.length === 0) setHabitIsEmpty(true);
			})
			.catch(error => {
				console.error('Error fetching data: ', error);
			});
	};

	const dueHabit = async id => {
		const response = await axios
			.post(habitDuePath(id), {
				withCredentials: true,
			})
			.catch(error => {
				console.error('Error fetching data: ', error);
			});
	};

	const handleClickDue = id => {
		dueHabit(id);
		setTriggerEffect(true);
	};

	return (
		<>
			<MDBListGroup style={{ minWidth: '22rem' }} light>
				{habits.map(habit => (
					<Habit habit={habit} due={handleClickDue} status={obj} />
				))}
			</MDBListGroup>
		</>
	);
}
