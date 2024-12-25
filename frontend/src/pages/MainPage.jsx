import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import {
	MDBCol,
	MDBContainer,
	MDBRow,
	MDBCard,
	MDBCardText,
	MDBCardBody,
	MDBModalBody,
	MDBCardImage,
	MDBBtn,
	MDBBreadcrumb,
	MDBBreadcrumbItem,
	MDBProgress,
	MDBProgressBar,
	MDBModal,
	MDBIcon,
	MDBListGroup,
	MDBListGroupItem,
} from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { getUserPath, getUsersPath } from '../ApiPath';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import ContentManagement from '../components/ContentManagement';
import CreateHabit from '../components/CreateHabit';

const getContent = action => {
	if (action === 0) {
		return <CreateHabit />;
	} else if (1 <= action <= 4) {
		return <ContentManagement obj={action} />;
	} else {
		throw new Error('Unknown action');
	}
};

export default function MainPage() {
	const [userInfoData, setUserInfoData] = useState(null);
	const [activeAction, setAction] = useState(0);

	const navigate = useNavigate();

	const handleClickCreate = () => {
		setAction(0);
	};

	const handleClickOnTheDay = () => {
		setAction(1);
	};

	const handleClickIOnTheWeek = () => {
		setAction(2);
	};

	const handleClickRedaction = () => {
		setAction(3);
	};

	const handleClickStatistic = () => {
		setAction(4);
	};

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
		getUsers();
	}, []);

	const userPage = (
		<>
			<section style={{ backgroundColor: '#eeeeee', minHeight: '100vh', height: '100%' }}>
				<Navbar />
				<MDBContainer className='py-3'>
					<MDBRow className='justify-content-center'>
						<MDBCol md='9' lg='7' xl='10' className='mt-5'>
							<MDBCard style={{ borderRadius: '15px', backgroundColor: '#1e1e1e' }}>
								<MDBCardBody>
									<Grid container sx={{ height: { xs: '60%', sm: '70vh' } }}>
										<Grid
											item
											xs={12}
											sm={5}
											lg={2.5}
											sx={{
												flexDirection: 'column',
												backgroundColor: '#262626',
												borderRight: { sm: 'none', md: '1px solid' },
												borderColor: { sm: 'none', md: 'divider' },
												borderRadius: '10px',
												alignItems: 'start',
											}}
										>
											<Box
												sx={{
													display: 'flex',
													flexDirection: 'column',
													width: '100%',
												}}
											>
												{/* Tyt */}
												<Menu create={handleClickCreate} onTheDay={handleClickOnTheDay} onTheWeek={handleClickIOnTheWeek} redaction={handleClickRedaction} statistic={handleClickStatistic} />
											</Box>
										</Grid>
										<Grid
											item
											lg={9.5}
											sm={5}
											sx={{
												flexDirection: 'column',
												alignItems: 'start',
												height: '100%',
											}}
										>
											<Box
												key={activeAction}
												sx={{
													display: 'flex',
													overflowY: 'auto',
													flexDirection: 'column',
													width: '100%',
													paddingLeft: '20px',
												}}
											>
												{/* Tyt */}

												{getContent(activeAction)}
											</Box>
										</Grid>
									</Grid>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>
		</>
	);

	const adminPage = (
		<>
			<section style={{ backgroundColor: '#eeeeee', minHeight: '100vh', height: '100%' }}>
				<Navbar />
				<MDBContainer className='py-3'>
					<MDBRow className='justify-content-center'>
						<MDBCol md='9' lg='7' xl='10' className='mt-5'>
							<MDBCard style={{ borderRadius: '15px', backgroundColor: '#1e1e1e' }}>
								<MDBCardBody>
									{users !== null
										? users.map(user => (
												<>
													<MDBListGroup style={{ minWidth: '22rem' }} light className='mb-3'>
														<MDBListGroupItem style={{ backgroundColor: '#262626', color: 'white', width: '100%', paddingLeft: '10px' }}>
															<h6 className='fw-bold'>{user.name}</h6>
															<h6 className='fw-bold'>UserId: {user.userId}</h6>
														</MDBListGroupItem>
													</MDBListGroup>
													<MDBBtn onClick={() => navigate('/redaction-profile/', { state: user })} style={{ backgroundColor: '#2980ba', color: 'white' }} rippleColor='white' color='#2980ba' className='w-100'>
														Управлять
													</MDBBtn>
													<hr />
												</>
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

	console.log(userInfoData);

	return (
		<>
			{userInfoData !== null && userInfoData.roles[0].roleName === 'ROLE_USER' ? userPage : null}
			{userInfoData !== null && userInfoData.roles[0].roleName === 'ROLE_ADMIN' ? adminPage : null}
		</>
	);
}
