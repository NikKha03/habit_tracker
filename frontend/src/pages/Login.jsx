import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';

import { userLoginPath } from '../ApiPath';

export default function Login() {
	const location = useLocation();
	let { state } = location;

	if (state === null) {
		state = {};
	}

	// return (
	// 	<MDBContainer fluid className='d-flex justify-content-center' style={{ backgroundColor: '#eeeeee', minHeight: '100vh', height: '100%' }}>
	// 		<MDBCard className='m-5' style={{ height: '100%' }}>
	// 			<form onSubmit={''}>
	// 				<MDBCardBody className='px-4'>
	// 					<h2 className='text-uppercase text-center mb-3'>Авторизация</h2>
	// 					<MDBInput defaultValue={state.email} style={{ width: '300px' }} wrapperClass='mb-3' label='Email' name='email' type='email' />
	// 					<MDBInput defaultValue={state.password} style={{ width: '300px' }} wrapperClass='mb-3' label='Пароль' name='password' type='password' />
	// 					<MDBBtn type='submitSave' style={{ width: '300px', backgroundColor: '#007bff', fontSize: '18px' }} className='w-100 mb-3 gradient-custom-4'>
	// 						Войти
	// 					</MDBBtn>
	// 					<div style={{ display: 'flex', justifyContent: 'center' }}>
	// 						<p style={{ marginRight: '5px', marginBottom: 0 }}>Нет аккаунта? </p>
	// 						<a href='/habit-tracker/auth/reg/'>Регистрация</a>
	// 					</div>
	// 				</MDBCardBody>
	// 			</form>
	// 		</MDBCard>
	// 	</MDBContainer>
	// );

	return (window.location.href = userLoginPath);
}
