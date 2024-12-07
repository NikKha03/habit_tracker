import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

import HabitStatistic from '../components/HabitStatistic';

const AppRouter = () => {
	const isAuth = true;
	const h = {
		habitId: 4,
		name: 'Кодинг',
		description: '2 часа работы над проектом.',
		repetitionId: {
			repetitionId: 1,
			value: 'on the day',
		},
		countExecutions: 3,
		executionTime: [],
		startDate: '2024-10-22',
		endDate: '2024-12-22',
		habitStatistics: [
			{
				statisticId: 11,
				dueDate: '2024-12-02',
			},
			{
				statisticId: 12,
				dueDate: '2024-12-02',
			},
			{
				statisticId: 13,
				dueDate: '2024-12-02',
			},
			{
				statisticId: 16,
				dueDate: '2024-12-03',
			},
		],
	};

	return (
		<Routes>
			<Route path='/' element={''} />
			<Route path='/habit-tracker/auth/login/' element={<Login />} />
			<Route path='/habit-tracker/main/' element={<MainPage />} />
			<Route path='/habit-tracker/profile/' element={<Profile />} />
			<Route path='/habit-tracker/st/' element={<HabitStatistic habit={h} />} />
		</Routes>
	);
};

export default AppRouter;
