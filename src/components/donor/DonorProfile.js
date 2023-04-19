import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import UserProfile from '../common/UserProfile';

function DonorProfile() {
	return (
		<StyledDonorFeatureContainer>
			{/* <Outlet /> */}
			<UserProfile />
		</StyledDonorFeatureContainer>
	);
}

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

export default DonorProfile;
