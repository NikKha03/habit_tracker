import React from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

export default function Register() {
	return (
		<MDBContainer fluid className='d-flex justify-content-center bg-image' style={{ backgroundColor: '#eeeeee', height: '100vh' }}>
			<div className='mask gradient-custom-3'></div>
			<MDBCard className='m-5' style={{ height: '400px' }}>
				<MDBCardBody className='px-5'>
					<h2 className='text-uppercase text-center mb-5'>РЕГИСТРАЦИЯ</h2>
					<MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
					<MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
					<MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />
					<MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>
						Register
					</MDBBtn>
				</MDBCardBody>
			</MDBCard>
		</MDBContainer>
	);
}
