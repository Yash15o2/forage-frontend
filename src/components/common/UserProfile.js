import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CreatePost from './CreatePost';
import ProfileButton from './ProfileButton';
import ProfileImage from './ProfileImage';
import ProfileInformation from './ProfileInformation';

function UserProfile(props) {
	return (
		<StyledProfileContainer>
			<ProfileImage size="80px" name={props.userName} />
			<ProfileInfoContainer>
				<ProfileInformation description={props.karmaCount} />
				<ProfileInformation
					heading="Account status"
					description={props.accountStatus ? 'Active' : 'Deactive'}
				/>
			</ProfileInfoContainer>
			<ProfileButton />
			<ProfileButton
				name="Notifications&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
				iconName="FaBell"
			/>
			{props.userType === 'donor' && <CreatePost />}
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

UserProfile.propTypes = {
	userType: PropTypes.string,
	userName: PropTypes.string,
	karmaCount: PropTypes.string,
	accountStatus: PropTypes.bool,
};

UserProfile.defaultProps = {
	userType: 'donor',
	userName: 'Yash Thakur',
	karmaCount: '17',
	accountStatus: true,
};

export default UserProfile;
