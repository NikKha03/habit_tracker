import React from 'react';

import { userLoginPath } from '../../../ApiPath';

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

import Navbar from '../../Navbar';

export default function UnauthorizedUserPanel() {
	return (
		<>
			<section style={{ backgroundColor: '#eeeeee', minHeight: '100vh', height: '100%' }}>
				<Navbar />
				<MDBContainer className='py-3'>
					<MDBRow className='justify-content-center'>
						<MDBCol md='9' lg='7' xl='10' className='mt-5'>
							<MDBCard style={{ borderRadius: '15px', backgroundColor: '#1e1e1e', color: 'white' }}>
								<MDBCardBody>
									<h2>Войдите в профиль или зарегистрируйтесь!</h2>
									<a href={userLoginPath}>Войти</a> / <a href='#'>Зарегистрироваться</a>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>
		</>
	);
}
