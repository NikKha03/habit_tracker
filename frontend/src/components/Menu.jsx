import * as React from 'react';

import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Menu({ create, onTheDay, onTheWeek, redaction, statistic }) {
	const textStyle = { fontSize: 20, textTransform: 'none', color: 'white', fontWeight: 500 };
	return (
		<React.Fragment>
			<List disablePadding sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
				<Button sx={{ width: '100%', marginBottom: 1 }} onClick={() => create()}>
					<Stack sx={{ width: '100%', alignItems: 'center' }} direction='row'>
						<Typography sx={textStyle} ml={1} variant='subtitle1'>
							Создать
						</Typography>
					</Stack>
				</Button>
				<Button sx={{ width: '100%', marginBottom: 1 }} onClick={() => onTheDay()}>
					<Stack sx={{ width: '100%', alignItems: 'center' }} direction='row'>
						<Typography sx={textStyle} ml={1} variant='subtitle1'>
							На сегодня
						</Typography>
					</Stack>
				</Button>
				<Button sx={{ width: '100%', marginBottom: 1 }} onClick={() => onTheWeek()}>
					<Stack sx={{ width: '100%', alignItems: 'center' }} direction='row'>
						<Typography sx={textStyle} ml={1} variant='subtitle1'>
							На неделю
						</Typography>
					</Stack>
				</Button>
				<Button sx={{ width: '100%', marginBottom: 1 }} onClick={() => redaction()}>
					<Stack sx={{ width: '100%', alignItems: 'center' }} direction='row'>
						<Typography sx={textStyle} ml={1} variant='subtitle1'>
							Редактирование
						</Typography>
					</Stack>
				</Button>
				<Button sx={{ width: '100%', marginBottom: 1 }} onClick={() => statistic()}>
					<Stack sx={{ width: '100%', alignItems: 'center' }} direction='row'>
						<Typography sx={textStyle} ml={1} variant='subtitle1'>
							Статистика
						</Typography>
					</Stack>
				</Button>
			</List>
		</React.Fragment>
	);
}
