import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

function Input(props) {
	return (
		<StyledInputContainer>
			<input
				type={props.type}
				placeholder={props.placeholder}
				maxLength={props.maxlength || ''}
				{...props.field}
			/>
			{props.meta && props.meta.error && props.meta.touched && (
				<span className="error">{props.meta.error}</span>
			)}
		</StyledInputContainer>
	);
}

const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	/* border: 1px solid blue; */
	width: 100%;

	${(props) => textInput}

	.error {
		color: ${(props) => props.theme.colors.danger['100']};
		font-size: 12px;
		line-height: 20px;
		font-weight: 400;
		font-family: ${(props) => props.theme.fonts.secondary};
	}
`;

const textInput = css`
	input,
	textarea {
		color: ${(props) => props.theme.colors.secondary['200']};
		gap: 10px;
		padding: 12px 16px;
		border-radius: 16px;
		background: ${(props) => props.theme.colors.neutral['100']} !important ;
		height: ${(props) => props.height};
		/* width: ${(props) => (props.width ? props.width : '100%')}; */
		width: auto;
		font-family: ${(props) => props.theme.fonts.secondary};
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		border: none;
		outline: none;

		&::placeholder {
			color: #9d9d9d;
			font-family: ${(props) => props.theme.fonts.secondary};
			font-weight: 400;
			font-size: 14px;
			line-height: 20px;
		}
	}
`;

Input.propTypes = {
	type: PropTypes.string,
	height: PropTypes.string,
	placeholder: PropTypes.string,
};

Input.defaultProps = {
	type: 'email',
	height: '48px',
	placeholder: 'johndoe@gmail.com',
};

export default Input;
