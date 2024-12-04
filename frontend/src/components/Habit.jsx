import React, { useState } from 'react';
import axios from 'axios';

import { habitDuePath } from '../ApiPath';

import SettingsIcon from '@mui/icons-material/Settings';
import { MDBIcon, MDBBtn, MDBListGroupItem } from 'mdb-react-ui-kit';

const habitSt = (color, habit, dueHabit) => {
	return (
		<MDBListGroupItem noBorders style={{ backgroundColor: color, color: 'white' }} className='px-3 mb-2 rounded-3 d-flex justify-content-between align-items-center'>
			<div>
				<h5 style={{ fontWeight: 900, marginBottom: 0 }}>{habit.name}</h5>
				<p style={{ marginBottom: 0, fontStyle: 'italic' }}>{habit.description}</p>
				<h6 style={{ marginBottom: 0 }}>Выполнено: {`${habit.habitStatistics.length} / ${habit.countExecutions}`}</h6>
			</div>

			<MDBBtn floating color='success' size='lg' onClick={() => dueHabit(habit.habitId)}>
				<MDBIcon far color='#eeeeee' size='3x' icon='check-circle' />
			</MDBBtn>
		</MDBListGroupItem>
	);
};

const redaction = (habit, redactionHabit) => {
	return (
		<MDBListGroupItem noBorders style={{ backgroundColor: ' #2980b9', color: 'white' }} className='px-3 mb-2 rounded-3 d-flex justify-content-between align-items-center'>
			<h5 style={{ fontWeight: 900, marginBottom: 0 }}>{habit.name}</h5>

			<MDBBtn floating color='white' size='lg' onClick={() => redaction()}>
				<MDBIcon fas color='#1e1e1e' size='2x' icon='cog' />
			</MDBBtn>
		</MDBListGroupItem>
	);
};

export default function Habit({ habit, due, status }) {
	if (status === 1 || status === 2) {
		if (habit.habitStatistics.length === 0) {
			return habitSt('#aaaaa8', habit, due);
		}

		if (habit.habitStatistics.length !== 0 && habit.habitStatistics.length < habit.countExecutions) {
			return habitSt('#e67e22', habit, due);
		}

		if (habit.habitStatistics.length === habit.countExecutions || habit.habitStatistics.length > habit.countExecutions) {
			return habitSt('#27ae60', habit, due);
		}
	}

	if (status === 3) {
		return redaction(habit);
	}
}
