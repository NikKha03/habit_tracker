import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBBtn, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

import Navbar from '../../Navbar';

export default function AdminPanel({ users }) {
	const navigate = useNavigate();

	return (
		<>
			<section style={{ backgroundColor: '#eeeeee', minHeight: '100vh', height: '100%' }}>
				<Navbar />
				<MDBContainer className='py-3'>
					<MDBRow className='justify-content-center'>
						<MDBCol md='9' lg='7' xl='10' className='mt-5'>
							<MDBCard style={{ borderRadius: '15px', backgroundColor: '#1e1e1e' }}>
								<MDBCardBody>
									{users !== null
										? users.map((user, i) => (
												<div key={i}>
													<MDBListGroup style={{ minWidth: '22rem' }} light className='mb-3'>
														<MDBListGroupItem style={{ backgroundColor: '#262626', color: 'white', width: '100%', paddingLeft: '10px' }}>
															<h6 className='fw-bold'>{user.name}</h6>
															<h6 className='fw-bold'>UserId: {user.userId}</h6>
														</MDBListGroupItem>
													</MDBListGroup>
													<MDBBtn
														onClick={() => navigate('/habit-tracker/redaction-profile/', { state: user })}
														style={{ backgroundColor: '#2980ba', color: 'white' }}
														rippleColor='white'
														color='#2980ba'
														className='w-100'
													>
														Управлять
													</MDBBtn>
													<hr />
												</div>
										  ))
										: null}
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>
		</>
	);
}
