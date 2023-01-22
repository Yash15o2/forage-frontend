import React from 'react';
import styled from 'styled-components';
import Button from '../utilities/Button';
import Icon from '../utilities/Icon';

function CreatePost() {
	return (
		<StyledCreatePostContainer>
			<StyledCreatePost>
				<h4>Create post</h4>
				<p>Fill in the information about food you have.</p>
			</StyledCreatePost>
			<StyledPostButton>
				<Icon iconName="FaPen" size="26px" />
			</StyledPostButton>
		</StyledCreatePostContainer>
	);
}

const StyledCreatePostContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: fit-content;
`;

const StyledCreatePost = styled.div`
	border-radius: 14px;
	background: ${(props) => props.theme.colors.neutral['100']};
	font-family: ${(props) => props.theme.fonts.primary};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 25px 44px;

	h4 {
		margin: 0;
		font-size: 1.05rem;
	}

	p {
		font-size: 0.8rem;
		color: ${(props) => props.theme.colors.secondary['200'] + '99'};
		width: 200px;
		text-align: center;
		line-height: 20px;
		word-wrap: break-word;
		font-weight: 500;
	}
`;

const StyledPostButton = styled(Button)`
	border-radius: 60px;
	padding: 10px 40px;
	margin-top: -25px;
`;

export default CreatePost;
