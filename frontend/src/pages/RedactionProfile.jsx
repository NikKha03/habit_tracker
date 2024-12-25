import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBBtn, MDBListGroupItem } from 'mdb-react-ui-kit';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';

import Navbar from '../components/Navbar';
import { getUserPath } from '../ApiPath';

export default function RedactionProfile() {
	const location = useLocation();
	const { state } = location;

	const navigate = useNavigate();

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
												{/* <MDBIcon fas color='#1e1e1e' size='2x' icon='cog' /> */}
												<MDBIcon fas color='#1e1e1e' size='2x' icon='arrow-circle-left' />
											</MDBBtn>
										</MDBListGroupItem>
										<hr className='mt-0 mb-4' />
										<MDBRow className='pt-1'>
											<MDBCol size='6' className='mb-3' style={{ width: '100%' }}>
												<MDBTypography tag='h6'>Имя</MDBTypography>
												{/* <MDBCardText>{userInfoData.name}</MDBCardText> */}
												<OutlinedInput defaultValue={state.name} id='name' name='name' style={inputBg} />
											</MDBCol>
										</MDBRow>
										<MDBRow className='pt-1'>
											<MDBCol size='6' className='mb-3' style={{ width: '100%' }}>
												<MDBTypography tag='h6'>Email</MDBTypography>
												{/* <MDBCardText>{userInfoData.email}</MDBCardText> */}
												<OutlinedInput defaultValue={state.email} id='email' name='email' style={inputBg} />
											</MDBCol>
										</MDBRow>
										<MDBRow className='pt-1'>
											<MDBCol size='6' className='mb-3' style={{ width: '100%' }}>
												<MDBTypography tag='h6'>Tg</MDBTypography>
												{/* <MDBCardText>@{userInfoData.tg}</MDBCardText> */}
												<OutlinedInput defaultValue={state.tg} id='tg' name='tg' style={inputBg} />
											</MDBCol>
										</MDBRow>
										<MDBBtn color='success' style={{ width: '100%', backgroundColor: 'green' }}>
											Сохранить изменения
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
