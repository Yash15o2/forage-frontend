import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../utilities/Icon';

function ProfileImage(props) {
	return (
		<StyledProfile>
			<StyledImage {...props}>
				<img
					// src={require('../../assets/default_profile.png')}
					src={
						props.src ? props.src : require('../../assets/default_profile.png')
					}
					alt="profile_img"
				/>
				{props.changeImage && (
					<StyledPencil {...props}>
						<Icon iconName="FaPen" size="25px" color="white" />
					</StyledPencil>
				)}
			</StyledImage>

			<h3>{props.name}</h3>
		</StyledProfile>
	);
}

const StyledPencil = styled.div`
	width: inherit;
	height: inherit;
	border-radius: 50%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: ${(props) => props.theme.colors.generic.black + '77'};
`;

const StyledProfile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	height: fit-content;
	h3 {
		margin: 0;
		font-weight: 600;
		font-size: ${(props) => (props.fontSize ? props.fontSize : '20px')};
	}
`;

const StyledImage = styled.div`
	cursor: pointer;
	border: 10px solid ${(props) => props.theme.colors.primary['100']};
	box-shadow: 0px 10px 20px
		${(props) => props.theme.colors.primary['100'] + '44'};
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	position: relative;
	overflow: hidden;
	border-radius: 50%;
	transition: 0.2s ease;
	img {
		display: inline;
		margin: 0 auto;
		height: 100%;
		width: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

ProfileImage.propTypes = {
	size: PropTypes.string,
	name: PropTypes.string,
	changeImage: PropTypes.bool,
	onClick: PropTypes.func,
};

ProfileImage.defaultProps = {
	size: '100px',
	name: 'Person Name',
	changeImage: false,
};

export default ProfileImage;
