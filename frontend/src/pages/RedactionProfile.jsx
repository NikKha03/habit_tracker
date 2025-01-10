import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import { deleteUserPath, userLogoutPath } from '../ApiPath';

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBTypography, MDBIcon, MDBBtn, MDBListGroupItem } from 'mdb-react-ui-kit';
import OutlinedInput from '@mui/material/OutlinedInput';

import Navbar from '../components/Navbar';

export default function RedactionProfile() {
	const location = useLocation();
	const { state } = location;
	let stateRoles = [];

	const navigate = useNavigate();

	const deleteUser = async userId => {
		const response = await axios
			.delete(deleteUserPath(userId), {
				withCredentials: true,
			})
			.catch(error => {
				console.error('Error fetching data: ', error);
			});
	};

	const handelClickDeleteUser = id => {
		// deleteUser(id);
		if (state !== null && Object.keys(state).length > 0) {
			console.log(state);
			let i = 0;
			while (i < state.roles.length) {
				stateRoles.push(state.roles[i].roleName);
				i++;
			}
		}

		console.log(stateRoles);

		if (stateRoles.includes('ROLE_ADMIN')) {
			navigate('/habit-tracker/main/');
		}
		if (stateRoles.includes('ROLE_USER')) {
			window.location.href = userLogoutPath;
		}
	};

	const inputBg = { backgroundColor: '#262626', color: 'white', width: '100%' };

	return (
		<section style={{ backgroundColor: '#eeeeee', minHeight: '100vh', height: '100%' }}>
			<Navbar />
			<MDBContainer className='py-3'>
				<MDBRow className='justify-content-center align-items-center h-100'>
					<MDBCol md='9' lg='7' xl='5' className='mt-5'>
						<MDBCard className='mb-3' style={{ borderRadius: '.5rem', backgroundColor: '#1e1e1e', color: 'white' }}>
							<MDBRow className='g-0'>
								<MDBCol md='8' style={{ width: '100%' }}>
									<MDBCardBody className='p-4'>
										<MDBListGroupItem className='mb-2 rounded-3 d-flex justify-content-between align-items-center'>
											<MDBTypography tag='h6' style={{ marginBottom: 0 }}>
												Информация
											</MDBTypography>
											<MDBBtn floating color='white' size='sm' onClick={() => navigate('/habit-tracker/profile/')}>
												<MDBIcon fas color='#1e1e1e' size='2x' icon='arrow-circle-left' />
											</MDBBtn>
										</MDBListGroupItem>
										<hr className='mt-0 mb-4' />
										<MDBRow className='pt-1'>
											<MDBCol size='6' className='mb-3' style={{ width: '100%' }}>
												<MDBTypography tag='h6'>Имя</MDBTypography>

												<OutlinedInput defaultValue={state.name} id='name' name='name' style={inputBg} />
											</MDBCol>
										</MDBRow>
										<MDBRow className='pt-1'>
											<MDBCol size='6' className='mb-3' style={{ width: '100%' }}>
												<MDBTypography tag='h6'>Email</MDBTypography>

												<OutlinedInput defaultValue={state.email} id='email' name='email' style={inputBg} />
											</MDBCol>
										</MDBRow>
										<MDBRow className='pt-1'>
											<MDBCol size='6' className='mb-3' style={{ width: '100%' }}>
												<MDBTypography tag='h6'>Tg</MDBTypography>

												<OutlinedInput defaultValue={state.tg} id='tg' name='tg' style={inputBg} />
											</MDBCol>
										</MDBRow>
										<MDBBtn color='success' style={{ width: '100%', marginBottom: '6px' }}>
											Сохранить изменения
										</MDBBtn>
										<MDBBtn onClick={() => handelClickDeleteUser(state.userId)} color='danger' style={{ width: '100%' }}>
											Удалить
										</MDBBtn>
									</MDBCardBody>
								</MDBCol>
							</MDBRow>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</section>
	);
}
