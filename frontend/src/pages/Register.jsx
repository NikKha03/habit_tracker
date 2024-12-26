import React from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

export default function Register() {
	return (
		<MDBContainer fluid className='d-flex justify-content-center' style={{ backgroundColor: '#eeeeee', minHeight: '100vh', height: '100%' }}>
			{/* <div className='mask gradient-custom-3'></div> */}
			<MDBCard className='m-5' style={{ height: '100%' }}>
				<MDBCardBody className='px-4'>
					<h2 className='text-uppercase text-center mb-3'>Регистрация</h2>
					<MDBInput style={{ width: '300px' }} wrapperClass='mb-3' label='Имя' id='form1' type='text' />
					<MDBInput wrapperClass='mb-3' label='Email' id='form2' type='email' />
					<MDBInput wrapperClass='mb-3' label='Пароль' id='form3' type='password' />
					<MDBBtn style={{ backgroundColor: '#007bff', fontSize: '18px' }} className='w-100 gradient-custom-4'>
						Зарегистрироваться
					</MDBBtn>
				</MDBCardBody>
			</MDBCard>
		</MDBContainer>
	);
}
