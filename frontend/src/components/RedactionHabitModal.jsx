import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { redactionHabitPath } from '../ApiPath';
import HabitRepetition from './HabitRepetition';

import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody } from 'mdb-react-ui-kit';

import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function RedactionHabitModal({ onClose, optSmModal, setOptSmModal, habit, trigger }) {
	const redactionHabit = async (habitId, header, dateStart, dateEnd, time, comment, countExecutions) => {
		const response = await axios
			.post(
				redactionHabitPath,
				{
					habitId: habitId,
					name: header,
					startDate: dateStart,
					endDate: dateEnd,
					description: comment,
					countExecutions: countExecutions,
				},
				{
					withCredentials: true,
				}
			)
			.catch(error => {
				console.error('Error fetching data: ', error);
			});
		trigger(true);
	};

	const [selectedValue, setSelectedValue] = useState(habit.repetition);

	const handleChangeCategory = event => {
		setSelectedValue(event.target.value);
	};

	const handleSubmitSave = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log(data.get('repl'));
		redactionHabit(habit.habitId, data.get('header'), data.get('dateStart'), data.get('dateEnd'), data.get('time'), data.get('comment'), data.get('count'));
	};

	const textStyle = { fontSize: 22, color: 'white' };
	const inputBg = { backgroundColor: '#262626', color: 'white' };

	return (
		<>
			<MDBModal open={optSmModal} tabIndex='-1' onClose={() => setOptSmModal(false)}>
				<MDBModalDialog size='xl'>
					<MDBModalContent style={{ backgroundColor: '#1e1e1e' }}>
						<MDBModalHeader>
							<MDBModalTitle>Редактирование привычки</MDBModalTitle>
							<MDBBtn className='btn-close' color='none' onClick={onClose}></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							<form onSubmit={handleSubmitSave}>
								<List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
									<Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
										<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
											<Typography sx={textStyle}>🔠 Заголовок</Typography>
											<OutlinedInput defaultValue={habit.name} id='header' name='header' style={inputBg} />
										</Box>
									</Box>
									<Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
										<Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', marginTop: 1, marginRight: 1 }}>
											<Typography sx={textStyle}>🔢 Количество повторений</Typography>
											<OutlinedInput defaultValue={habit.countExecutions} id='count' name='count' style={{ backgroundColor: '#262626', color: 'white' }} />
										</Box>
										<Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', marginTop: 1, marginLeft: 1 }}>
											<Typography sx={textStyle}>📂 Категория</Typography>
											<HabitRepetition change={handleChangeCategory} value={habit.repetitionId.value} id='repl' name='repl' />
										</Box>
									</Box>

									<Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
										<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: 1 }}>
											<Typography sx={textStyle}>🗓️ Период формирования привычки</Typography>
											<Box sx={{ display: 'flex', flexDirection: 'row' }}>
												<OutlinedInput defaultValue={habit.startDate} id='date' name='dateStart' placeholder='гггг-мм-дд' style={{ backgroundColor: '#262626', color: 'white', width: '47.5%' }} />
												<h5 style={{ fontSize: 20, textTransform: 'none', color: 'white', fontWeight: 900, width: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>—</h5>
												<OutlinedInput defaultValue={habit.endDate} id='date' name='dateEnd' placeholder='гггг-мм-дд' style={{ backgroundColor: '#262626', color: 'white', width: '47.5%' }} />
											</Box>
										</Box>
									</Box>

									<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: 1 }}>
										<Typography sx={textStyle}>📝 Комментарий</Typography>
										<TextField defaultValue={habit.description} id='comment' name='comment' multiline rows={4} variant='filled' sx={inputBg} />
									</Box>
								</List>
								<Button type='submitSave' variant='contained' color='success' sx={{ width: '100%', marginTop: 1 }}>
									Сохранить
								</Button>
								<Button type='submitDelete' variant='contained' color='error' sx={{ width: '100%', marginTop: 1 }}>
									Удалить
								</Button>
							</form>
						</MDBModalBody>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</>
	);
}
