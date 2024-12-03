import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import Navbar from '../components/Navbar';
import { getUserPath } from '../ApiPath';

export default function Profile() {
	const [userInfoData, setUserInfoData] = useState({});

	const getUserInfo = async () => {
		const response = await axios
			.get(getUserPath, {
				withCredentials: true,
			})
			.then(response => {
				setUserInfoData(response.data);
			})
			.catch(error => {
				console.error('Error fetching data: ', error);
			});
	};

	useEffect(() => {
		getUserInfo();
	}, []);

	return (
		<section style={{ backgroundColor: '#aaaaa8', minHeight: '100vh', height: '100%' }}>
			<Navbar />
			<MDBContainer className='py-3'>
				<MDBRow className='justify-content-center align-items-center h-100'>
					<MDBCol md='9' lg='7' xl='5' className='mt-5'>
						<MDBCard className='mb-3' style={{ borderRadius: '.5rem', backgroundColor: '#1e1e1e', color: 'white' }}>
							<MDBRow className='g-0'>
								<MDBCol md='8' style={{ width: '100%' }}>
									<MDBCardBody className='p-4'>
										<MDBTypography tag='h6'>Информация</MDBTypography>
										<hr className='mt-0 mb-4' />
										<MDBRow className='pt-1'>
											<MDBCol size='6' className='mb-3' style={{ width: '100%' }}>
												<MDBTypography tag='h6'>Имя</MDBTypography>
												<MDBCardText>{userInfoData.name}</MDBCardText>
											</MDBCol>
										</MDBRow>
										<MDBRow className='pt-1'>
											<MDBCol size='6' className='mb-3' style={{ width: '100%' }}>
												<MDBTypography tag='h6'>Email</MDBTypography>
												<MDBCardText>{userInfoData.email}</MDBCardText>
											</MDBCol>
										</MDBRow>
										<MDBRow className='pt-1'>
											<MDBCol size='6' className='mb-3' style={{ width: '100%' }}>
												<MDBTypography tag='h6'>Tg</MDBTypography>
												<MDBCardText>@{userInfoData.tg}</MDBCardText>
											</MDBCol>
										</MDBRow>
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
