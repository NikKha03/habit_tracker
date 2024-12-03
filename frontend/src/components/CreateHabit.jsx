import React, { useState } from 'react';
import axios from 'axios';

import { createHabitPath } from '../ApiPath';
import HabitRepetition from './HabitRepetition';

import AddAlertIcon from '@mui/icons-material/AddAlert';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Description } from '@mui/icons-material';

const saveHabit = async (header, dateStart, dateEnd, time, comment, repetition, countExecutions) => {
	console.log(repetition);
	const response = await axios
		.post(
			createHabitPath,
			{
				name: header,
				startDate: dateStart,
				endDate: dateEnd,
				description: comment,
				repetitionValue: repetition,
				countExecutions: countExecutions,
			},
			{
				withCredentials: true,
			}
		)
		.catch(error => {
			console.error('Error fetching data: ', error);
		});
};

export default function CreateHabit() {
	const [selectedValue, setSelectedValue] = useState('on the day');

	const handleChangeCategory = event => {
		setSelectedValue(event.target.value);
	};

	const handleSubmitSave = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log(data.get('count'));
		saveHabit(data.get('header'), data.get('dateStart'), data.get('dateEnd'), data.get('time'), data.get('comment'), selectedValue, data.get('count'));
	};

	const textStyle = { fontSize: 22, color: 'white' };
	const inputBg = { backgroundColor: '#262626', color: 'white' };

	return (
		<form onSubmit={handleSubmitSave}>
			<List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
				<Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
					<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
						<Typography sx={textStyle}>🔠 Заголовок</Typography>
						<OutlinedInput id='header' name='header' style={inputBg} />
					</Box>
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
					<Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', marginTop: 1, marginRight: 1 }}>
						<Typography sx={textStyle}>🔢 Количество повторений</Typography>
						<OutlinedInput id='count' name='count' style={{ backgroundColor: '#262626', color: 'white' }} />
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', marginTop: 1, marginLeft: 1 }}>
						<Typography sx={textStyle}>📂 Категория</Typography>
						<HabitRepetition change={handleChangeCategory} value={selectedValue} />
					</Box>
				</Box>

				<Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
					<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: 1 }}>
						<Typography sx={textStyle}>🗓️ Период формирования привычки</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row' }}>
							<OutlinedInput id='date' name='dateStart' placeholder='гггг-мм-дд' style={{ backgroundColor: '#262626', color: 'white', width: '47.5%' }} />
							<h5 style={{ fontSize: 20, textTransform: 'none', color: 'white', fontWeight: 900, width: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>—</h5>
							<OutlinedInput id='date' name='dateEnd' placeholder='гггг-мм-дд' style={{ backgroundColor: '#262626', color: 'white', width: '47.5%' }} />
						</Box>
					</Box>
				</Box>

				{/* <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
					<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: 1 }}>
						<Typography sx={textStyle}>⏰ Время выполнения</Typography>
						<OutlinedInput id='time' name='time' placeholder='чч:мм' style={inputBg} />
					</Box>
				</Box> */}

				<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: 1 }}>
					<Typography sx={textStyle}>📝 Комментарий</Typography>
					<TextField id='comment' name='comment' multiline rows={4} variant='filled' style={inputBg} />
				</Box>
			</List>
			<Button type='submitSave' variant='contained' color='success' sx={{ width: '100%', marginTop: 1 }}>
				Сохранить
			</Button>
		</form>
	);
}
