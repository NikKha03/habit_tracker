import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function HabitRepetition({ change, value }) {
	return (
		<FormControl>
			<Select sx={{ backgroundColor: '#262626', color: 'white' }} value={value} onChange={change} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
				<MenuItem value='on the day'>На день</MenuItem>
				<MenuItem value='on the weak'>На неделю</MenuItem>
			</Select>
		</FormControl>
	);
}
