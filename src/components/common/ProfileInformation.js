import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProfileInformation(props) {
	return (
		<StyledInfoContainer>
			<p className="heading">{props.heading}</p>
			<p className="description">{props.description}</p>
		</StyledInfoContainer>
	);
}

const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;

	.heading {
		margin: 0;
		color: ${(props) => props.theme.colors.secondary['200'] + '99'};
		font-size: 0.8rem;
		font-family: ${(props) => props.theme.fonts.primary};
	}

	.description {
		margin: 0;
		font-weight: 600;
		font-size: 1.4rem;
		font-family: ${(props) => props.theme.fonts.primary};
	}
`;

ProfileInformation.propTypes = {
	heading: PropTypes.string,
	description: PropTypes.string,
};

ProfileInformation.defaultProps = {
	heading: 'Karma count',
	description: '3',
};

export default ProfileInformation;
