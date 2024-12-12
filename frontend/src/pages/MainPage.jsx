import React, { useEffect, useState } from 'react';

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
	const [activeAction, setAction] = useState(0);

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

	return (
		<>
			<section style={{ backgroundColor: '#a6acaf', minHeight: '100vh', height: '100%' }}>
				<Navbar />
				<MDBContainer className='py-3'>
					<MDBRow className='justify-content-center'>
						<MDBCol md='9' lg='7' xl='10' className='mt-5'>
							<MDBCard style={{ borderRadius: '15px', backgroundColor: '#1e1e1e' }}>
								<MDBCardBody>
									<Grid container sx={{ height: { xs: '60%', sm: '70dvh' } }}>
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
}
