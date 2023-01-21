import React from 'react';
import styled from 'styled-components';
import CreatePost from '../common/CreatePost';
import ProfileButton from '../common/ProfileButton';
import ProfileImage from '../common/ProfileImage';
import ProfileInformation from '../common/ProfileInformation';

function DonorProfile() {
	return (
		<StyledProfileContainer>
			<ProfileImage />
			<ProfileInfoContainer>
				<ProfileInformation />
				<ProfileInformation heading="Account status" description="Active" />
			</ProfileInfoContainer>
			<ProfileButton />
			<ProfileButton
				name="Notifications&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
				iconName="FaBell"
			/>
			<CreatePost />
		</StyledProfileContainer>
	);
}

const StyledProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

const ProfileInfoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 50px;
	padding: 20px 0;
`;

export default DonorProfile;
