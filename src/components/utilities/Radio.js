import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Radio(props) {
	return (
		<StyledRadio>
			<StyledLabel htmlFor={props.id}>
				<StyledInput
					type="radio"
					name={props.name}
					value={props.value}
					{...props}
				/>
				{props.labelText}
			</StyledLabel>
		</StyledRadio>
	);
}

const StyledRadio = styled.div`
	display: block;
`;

const StyledLabel = styled.label`
	outline: none;
	font-family: 'Inter', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
	overflow: hidden;
	transition: 0.2s;
	color: ${(props) => props.theme.colors.secondary['200']};
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 10px 18px;
	height: fit-content;
	width: fit-content;
	cursor: pointer;
	border-radius: 8px;
	border: 2px solid ${(props) => props.theme.colors.primary['100']};
	background: ${(props) => props.theme.colors.primary['100'] + '30'};
`;

const StyledInput = styled.input`
	cursor: pointer;
	margin: 0;
	padding: 0;
	-webkit-transform: scale(1.4);
	transform: scale(1.4);
	accent-color: ${(props) => props.theme.colors.secondary['200']};
`;

Radio.propTypes = {
	id: PropTypes.string,
	labelText: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	onClick: PropTypes.func,
};

export default Radio;
