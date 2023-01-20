import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function StyledLink(props) {
	return (
		<LinkContainer>
			{props.description + ' '}
			<span>{props.linkText}</span>
		</LinkContainer>
	);
}

const LinkContainer = styled.p`
	font-size: 14px;
	color: ${(props) => props.theme.colors.neutral['200']};
	font-family: ${(props) => props.theme.fonts.secondary};

	span {
		color: ${(props) => props.theme.colors.pink['100']};
		cursor: pointer;
		font-weight: 600;
		text-decoration: none;
	}
`;

StyledLink.propTypes = {
	description: PropTypes.string,
	linkText: PropTypes.string,
};

StyledLink.defaultProps = {
	description: "Don't have an account ?",
	linkText: 'Sign Up Now',
};

export default StyledLink;
