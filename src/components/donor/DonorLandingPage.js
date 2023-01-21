import React from 'react';
import styled from 'styled-components';
import SideNavigation from '../common/SideNavigation';

function DonorLandingPage() {
	return (
		<StyledDonorPage>
			<StyledNavigationContainer>
				<SideNavigation />
			</StyledNavigationContainer>

			<StyledMainContainer>
				<StyledPostContainer></StyledPostContainer>
			</StyledMainContainer>
		</StyledDonorPage>
	);
}

const StyledDonorPage = styled.div`
	background-color: ${(props) => props.theme.colors.neutral['100']};
	height: 100vh;
	width: 100vw;
	display: flex;
	padding: 20px 0;

	@media only screen and (max-width: 1000px) {
		padding: 12px 0;
	}
`;

const StyledNavigationContainer = styled.div`
	width: fit-content;
	z-index: 1;
	padding: 0 30px;

	@media only screen and (max-width: 1000px) {
		padding: 0 10px;
	}
`;

const StyledMainContainer = styled.div`
	background-color: ${(props) => props.theme.colors.generic.white};
	width: 80%;
	height: 100%;
	border-radius: 30px;
	box-shadow: 5px 5px 30px ${(props) => props.theme.colors.generic.black + '11'};

	@media only screen and (max-width: 1000px) {
		border-radius: 15px;
	}
`;

const StyledPostContainer = styled.div`
	background-color: ${(props) => props.theme.colors.generic.white};
	width: 70%;
	height: 100%;
	border-radius: 30px;
	box-shadow: 5px 5px 30px ${(props) => props.theme.colors.generic.black + '11'};

	@media only screen and (max-width: 1000px) {
		border-radius: 15px;
	}
`;

export default DonorLandingPage;
