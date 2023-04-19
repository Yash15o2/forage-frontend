import React from 'react';
import styled from 'styled-components';
import SideNavigation from '../common/SideNavigation';
import UserProfile from '../common/UserProfile';
import Logo from '../utilities/Logo';

import { Outlet } from 'react-router-dom';
import DonorProfile from './DonorProfile';

function DonorLandingPage() {
	return (
		<StyledDonorPage>
			<StyledNavigationContainer>
				<SideNavigation />
			</StyledNavigationContainer>

			<StyledMainContainer>
				<StyledPostContainer>
					<StyledLogo>
						<Logo rowDirection size="20px" text="25px" />
					</StyledLogo>
					<Outlet />
				</StyledPostContainer>
				<DonorProfile />
				{/* <StyledDonorFeatureContainer>
					<UserProfile />
				</StyledDonorFeatureContainer> */}
			</StyledMainContainer>
		</StyledDonorPage>
	);
}

const StyledLogo = styled.div`
	padding: 0 0 10px 0;
	display: none;

	@media only screen and (max-width: 1000px) {
		display: block;
	}
`;

const StyledDonorPage = styled.div`
	background-color: ${(props) => props.theme.colors.neutral['100']};
	height: 100%;
	width: fit-content;
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 20px 10px;

	@media only screen and (max-width: 1000px) {
		padding: 12px 10px;
	}

	@media only screen and (max-width: 540px) {
		gap: 10px;
	}
`;

const StyledNavigationContainer = styled.div`
	width: fit-content;

	@media only screen and (max-width: 1000px) {
		padding: 0;
	}
`;

const StyledMainContainer = styled.div`
	padding-right: 50px;
	display: flex;
	justify-content: space-between;
	gap: 20px;
	background-color: ${(props) => props.theme.colors.generic.white};
	width: fit-content;
	height: 100%;
	border-radius: 30px;
	box-shadow: 5px 5px 30px ${(props) => props.theme.colors.generic.black + '11'};

	@media only screen and (max-width: 1000px) {
		border-radius: 15px;
		padding: 0;
		width: 94vw;
	}
`;

const StyledPostContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.generic.white};
	width: fit-content;
	padding: 40px 50px;
	border-radius: 30px;
	box-shadow: 5px 5px 30px ${(props) => props.theme.colors.generic.black + '11'};
	gap: 20px;
	overflow: auto;

	@media only screen and (max-width: 1000px) {
		border-radius: 15px;
		padding: 30px 25px;
		width: 100%;
	}

	@media only screen and (max-width: 600px) {
		padding: 20px 10px 20px 10px;
	}
`;

// const StyledDonorFeatureContainer = styled.div`
// 	width: fit-content;
// 	display: flex;
// 	align-items: flex-start;
// 	justify-content: center;
// 	padding: 30px 0px;
// 	width: fit-content;

// 	@media only screen and (max-width: 1000px) {
// 		padding: 30px 10px;
// 	}

// 	@media only screen and (max-width: 800px) {
// 		display: none;
// 	}
// `;

export default DonorLandingPage;
