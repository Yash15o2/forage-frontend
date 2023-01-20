import React from 'react';
import styled from 'styled-components';
import background_template_image from '../../assets/background_template_image.png';

function BackgroundTemplate(props) {
	return (
		<StyledBackgroundTemplate>
			<StyledFormContainer>{props.children}</StyledFormContainer>
			<StyledImage>
				<img src={background_template_image} alt="doner" />
			</StyledImage>
		</StyledBackgroundTemplate>
	);
}

const StyledBackgroundTemplate = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100vh;
	width: 100vw;
`;

const StyledFormContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50vw;
	overflow: auto;

	@media only screen and (max-width: 1000px) {
		width: 100vw;
	}
`;

const StyledImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	border-left: 2px solid
		${(props) => props.theme.colors.secondary['200'] + '10'};
	width: 50%;

	img {
		height: 60vh;
	}

	@media only screen and (max-width: 1000px) {
		display: none;
	}
`;

export default BackgroundTemplate;
