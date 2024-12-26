import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { getUserPath, getUsersPath } from '../ApiPath';
import AdminPanel from '../components/users/admin/AdminPanel';
import UserPanel from '../components/users/user/UserPanel';
import UnauthorizedUserPanel from '../components/users/unauthorized/UnauthorizedUserPanel';

export default function MainPage() {
	const [principalUser, setPrincipalUser] = useState(null);
	const [users, setUsers] = useState(null);

	const getUsers = async () => {
		const response = await axios
			.get(getUsersPath, {
				withCredentials: true,
			})
			.then(response => {
				setUsers(response.data);
			})
			.catch(error => {
				console.error('Error fetching data: ', error);
			});
	};

	const getPrincipalUser = async () => {
		const response = await axios
			.get(getUserPath, {
				withCredentials: true,
			})
			.then(response => {
				setPrincipalUser(response.data);
			})
			.catch(error => {
				console.error('Error fetching data: ', error);
			});
	};

	useEffect(() => {
		getPrincipalUser();
		getUsers();
	}, []);

	if (principalUser === null) {
		return <UnauthorizedUserPanel />;
	}

	if (principalUser !== null && Object.keys(principalUser).length > 0) {
		let allRoles = [];
		let i = 0;
		while (i < principalUser.roles.length) {
			allRoles.push(principalUser.roles[i].roleName);
			i++;
		}

		if (allRoles.includes('ROLE_ADMIN')) {
			return <AdminPanel users={users} />;
		} else if (allRoles.includes('ROLE_USER')) {
			return <UserPanel />;
		}
	}
}
