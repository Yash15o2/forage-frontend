import React from 'react';
import styled from 'styled-components';
import SideNavigation from '../common/SideNavigation';
import DonorDashboard from './DonorDashboard';
import UserProfile from '../common/UserProfile';
import Button from '../utilities/Button';
import Icon from '../utilities/Icon';
import NotificationPage from '../common/NotificationPage';

function DonorLandingPage() {
	return (
		<StyledDonorPage>
			<StyledNavigationContainer>
				<SideNavigation />
			</StyledNavigationContainer>

			<StyledMainContainer>
				<StyledPostContainer>
					<DonorDashboard />
					<StyledCreatePostButton>
						<Icon iconName="FaPen" size="26px" />
					</StyledCreatePostButton>
				</StyledPostContainer>
				<StyledDonorFeatureContainer>
					{/* <UserProfile /> */}
					<NotificationPage />
				</StyledDonorFeatureContainer>
			</StyledMainContainer>
		</StyledDonorPage>
	);
}

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
	background-color: ${(props) => props.theme.colors.generic.white};
	width: fit-content;
	padding: 40px 50px;
	border-radius: 30px;
	box-shadow: 5px 5px 30px ${(props) => props.theme.colors.generic.black + '11'};

	@media only screen and (max-width: 1000px) {
		border-radius: 15px;
		padding: 30px 25px;
		width: 100%;
	}

	@media only screen and (max-width: 600px) {
		padding: 20px 10px 20px 10px;
	}
`;

const StyledDonorFeatureContainer = styled.div`
	width: fit-content;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 30px 0px;
	width: fit-content;

	@media only screen and (max-width: 1000px) {
		padding: 30px 10px;
	}

	@media only screen and (max-width: 800px) {
		display: none;
	}
`;

const StyledCreatePostButton = styled(Button)`
	position: absolute;
	bottom: -5px;
	right: 5px;
	border-radius: 60px;
	padding: 10px 40px;

	@media only screen and (min-width: 800px) {
		display: none;
	}
`;

export default DonorLandingPage;
