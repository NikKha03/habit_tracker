import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

const AppRouter = () => {
	const isAuth = true;
	return (
		<Routes>
			<Route path='/' element={''} />
			<Route path='/habit-tracker/auth/login/' element={<Login />} />
			<Route path='/habit-tracker/main/' element={<MainPage />} />
			<Route path='/habit-tracker/profile/' element={<Profile />} />
		</Routes>
	);
};

export default AppRouter;
