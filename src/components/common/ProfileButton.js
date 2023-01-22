import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../utilities/Button';
import Icon from '../utilities/Icon';

function ProfileButton(props) {
	return (
		<StyledProfileButton shadow={false}>
			<div className="icon-container">
				<Icon size="24px" iconName={props.iconName} />
			</div>
			<p>{props.name}</p>
		</StyledProfileButton>
	);
}

const StyledProfileButton = styled(Button)`
	background: ${(props) => props.theme.colors.neutral['100']};
	padding: 18px 80px 18px 25px;
	border-radius: 14px;
	color: ${(props) => props.theme.colors.secondary['200']};
	font-family: ${(props) => props.theme.fonts.primary};
	font-weight: 600;

	p {
		font-size: 0.9rem;
		margin: 0;
	}

	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 6px;
		border: 2px solid ${(props) => props.theme.colors.secondary['200'] + '22'};
		border-radius: 12px;
		margin-right: 10px;
	}

	&:hover {
		background: ${(props) => props.theme.colors.neutral['100']};
	}
`;

ProfileButton.propTypes = {
	name: PropTypes.string,
	iconName: PropTypes.string,
};

ProfileButton.defaultProps = {
	name: 'Account Settings',
	iconName: 'IoSettingsSharp',
};

export default ProfileButton;
