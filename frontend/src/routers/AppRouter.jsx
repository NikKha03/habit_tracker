import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import Profile from '../pages/Profile';
import RedactionProfile from '../pages/RedactionProfile';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={''} />
			<Route path='/habit-tracker/auth/login/' element={<Login />} />
			<Route path='/habit-tracker/auth/reg/' element={<Register />} />
			<Route path='/habit-tracker/main/' element={<MainPage />} />
			<Route path='/habit-tracker/profile/' element={<Profile />} />
			<Route path='/habit-tracker/redaction-profile/' element={<RedactionProfile />} />
		</Routes>
	);
};

export default AppRouter;
