import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, useTheme } from 'styled-components';

function Button(props) {
	const theme = useTheme();
	return <StyledButton {...props} theme={theme['colors'][props.theme]} />;
}

const StyledButton = styled.button`
	outline: none;
	border-radius: 8px;
	font-family: 'Inter', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
	padding: 10px 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	cursor: pointer;
	overflow: hidden;
	transition: 0.2s;
	width: ${(props) =>
		props.expand ? '100%' : props.width ? props.width : 'fit-content'};
	height: fit-content;

	${(props) =>
		props.shadow &&
		css`
			box-shadow: 0px 10px 20px ${(props) => props.theme['100'] + '44'};
		`}

	${(props) =>
		props.navButton || props.inverted || props.disabled || props.grayButton
			? ''
			: css`
					background: ${props.theme['100']};
					color: #fff;
					border: none;
					&:hover {
						background: ${props.theme['200']};
					}
			  `}

	${(props) =>
		props.inverted &&
		css`
			background: transparent;
			color: ${props.theme['200']};
			border: 1px solid ${props.theme['200']};
			box-shadow: none;
			/* &:hover {
				background: ${props.theme['100']};
			} */
		`}

    ${(props) =>
		props.navButton &&
		css`
			border: none;
			background: transparent;
			box-shadow: none;
			color: ${props.theme['100']};
			padding: 0px;
			&:hover {
				color: ${props.theme['200']};
			}
		`}

    ${(props) =>
		props.grayButton &&
		css`
			border: 1px solid #252644;
			background: transparent;
			color: #252644;
			box-shadow: none;
			&:hover {
				color: ${props.theme['100']};
				border: 1px solid ${props.theme['100']};
			}
		`}

    ${(props) =>
		props.disabled &&
		(props.inverted || props.grayButton
			? css`
					background: transparent;
					color: #b1b3c4;
					border: 1px solid #b1b3c4;
					pointer-events: none;
					box-shadow: none;
			  `
			: props.navButton
			? css`
					background: transparent;
					color: #b1b3c4;
					box-shadow: none;

					pointer-events: none;
			  `
			: css`
					background: #d9dae6;
					color: #ffffff;
					box-shadow: none;

					border: 1px solid #d9dae6;
					pointer-events: none;
			  `)}
`;

Button.propTypes = {
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	inverted: PropTypes.bool,
	expand: PropTypes.bool,
	navButton: PropTypes.bool,
	shadow: PropTypes.bool,
	grayButton: PropTypes.bool,
	width: PropTypes.string,
	theme: PropTypes.string,
};

Button.defaultProps = {
	inverted: false,
	disabled: false,
	expand: false,
	navButton: false,
	shadow: true,
	grayButton: false,
	theme: 'primary',
};

export default Button;
