import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

function Logo(props) {
	return (
		<StyledLogo {...props}>
			<img
				height={props.size}
				src={require('../../assets/logo.png')}
				alt="logo"
			/>
			FORAGE
		</StyledLogo>
	);
}

const StyledLogo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: ${(props) => props.text};
	color: ${(props) => props.theme.colors.secondary['200']};
	font-weight: bold;
	gap: 15px;

	${(props) =>
		props.rowDirection &&
		css`
			flex-direction: row;
			gap: 10px;
		`}
`;

Logo.propTypes = {
	size: PropTypes.string,
	text: PropTypes.string,
	rowDirection: PropTypes.bool,
};

Logo.defaultProps = {
	size: '45px',
	text: '40px',
	rowDirection: false,
};

export default Logo;
