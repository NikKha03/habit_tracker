import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { userRegPath } from '../ApiPath';

import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';

export default function Register() {
	const navigate = useNavigate();

	const Reg = async (name, email, tg, password) => {
		const response = await axios
			.post(
				userRegPath,
				{
					name: name,
					email: email,
					tg: tg,
					password: password,
				},
				{
					withCredentials: true,
				}
			)
			.catch(error => {
				console.error('Error fetching data: ', error);
			});
		navigate('/habit-tracker/auth/login/', { state: { email: email, password: password } });
	};

	const handleSubmitReg = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		Reg(data.get('name'), data.get('email'), data.get('tg'), data.get('password'));
	};

	return (
		<MDBContainer fluid className='d-flex justify-content-center' style={{ backgroundColor: '#eeeeee', minHeight: '100vh', height: '100%' }}>
			{/* <div className='mask gradient-custom-3'></div> */}
			<MDBCard className='m-5' style={{ height: '100%' }}>
				<form onSubmit={handleSubmitReg}>
					<MDBCardBody className='px-4'>
						<h2 className='text-uppercase text-center mb-3'>Регистрация</h2>
						<MDBInput style={{ width: '300px' }} wrapperClass='mb-3' label='Имя' name='name' type='text' />
						<MDBInput style={{ width: '300px' }} wrapperClass='mb-3' label='Email' name='email' type='email' />
						<MDBInput style={{ width: '300px' }} wrapperClass='mb-3' label='Tg' name='tg' type='tg' />
						<MDBInput style={{ width: '300px' }} wrapperClass='mb-3' label='Пароль' name='password' type='password' />
						<MDBBtn type='submitSave' style={{ width: '300px', backgroundColor: '#007bff', fontSize: '18px' }} className='w-100 mb-3 gradient-custom-4'>
							Зарегистрироваться
						</MDBBtn>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<p style={{ marginRight: '5px', marginBottom: 0 }}>Есть аккаунт? </p>
							<a href='/habit-tracker/auth/login/'>Войти</a>
						</div>
					</MDBCardBody>
				</form>
			</MDBCard>
		</MDBContainer>
	);
}
