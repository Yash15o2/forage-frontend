import React, { useState } from 'react';
import styled from 'styled-components';
import { Rating } from 'react-simple-star-rating';

function Rate() {
	const [rating, setRating] = useState(0);
	console.log(rating);

	const handleRating = (rate) => {
		setRating(rate);
	};
	return (
		<StyledRateContainer>
			<p>How would you rate us?</p>
			<StyledStars>
				<Rating
					onClick={handleRating}
					size="20px"
					fillColor="#FFBE00"
					transition="false"
				/>
			</StyledStars>
		</StyledRateContainer>
	);
}

const StyledRateContainer = styled.div`
	height: fit-content;
	width: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 18px 10px;
	border-radius: 8px;
	gap: 10px;
	box-shadow: 2px 2px 20px ${(props) => props.theme.colors.generic.black + '15'};
	color: ${(props) => props.theme.colors.secondary['200']};

	p {
		width: 150px;
		text-align: center;
		padding: 0;
		margin: 0;
		font-weight: 600;
	}
`;

const StyledStars = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
`;
export default Rate;
