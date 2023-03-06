import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../utilities/Button';

function DonorPost(props) {
	return (
		<StyledDonorPost>
			<StyledInfoContainer>
				<CreatedTimeDate>
					<p className="heading">Created at</p>
					<p className="text">
						{props.time} - {props.date}
					</p>
				</CreatedTimeDate>

				{props.accepted && (
					<CreatedTimeDate>
						<p className="heading">Accepted by</p>
						<p className="text">{props.acceptedBy}</p>
					</CreatedTimeDate>
				)}

				{!props.accepted && <div className="time">Time left 01:23:34</div>}

				{!props.accepted && (
					<StyledButtonContainer>
						<StyledButton>View</StyledButton>
						<StyledButton inverted>Cancel</StyledButton>
					</StyledButtonContainer>
				)}

				{props.accepted && (
					<StyledButtonContainer>
						<StyledButton expand>Acknowledge</StyledButton>
					</StyledButtonContainer>
				)}
			</StyledInfoContainer>
			<StyledPostImage>
				<img src={require('../../assets/food_img.png')} alt="food" />
			</StyledPostImage>
		</StyledDonorPost>
	);
}

const StyledDonorPost = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.colors.neutral['100']};
	padding: 10px 20px;
	border-radius: 10px;
	width: fit-content;
	gap: 20px;
`;

const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* gap: 5px; */

	.time {
		color: ${(props) => props.theme.colors.pink['100']};
		font-family: ${(props) => props.theme.fonts.primary};
		font-size: 0.7rem;
		font-weight: 500;
	}
`;

const StyledPostImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100px;
	img {
		border-radius: 10px;
		width: 100%;
	}
`;

const CreatedTimeDate = styled.div`
	display: flex;
	flex-direction: column;

	p {
		margin: 0;
		font-size: 0.7rem;
		font-family: ${(props) => props.theme.fonts.primary};
		color: ${(props) => props.theme.colors.secondary['100'] + '99'};
		font-weight: 500;
	}

	.text {
		font-weight: 600;
		color: ${(props) => props.theme.colors.secondary['100'] + 'ee'};
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		width: 150px;
	}
`;

const StyledButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;

const StyledButton = styled(Button)`
	padding: 8px 20px;
	font-size: 0.8rem;
`;

DonorPost.propTypes = {
	accepted: PropTypes.bool,
	time: PropTypes.string,
	date: PropTypes.string,
	acceptedBy: PropTypes.string,
};

DonorPost.defaultProps = {
	accepted: false,
	time: '12:30 PM',
	date: '21/10/2023',
	acceptedBy: 'Welfare Foundation',
};

export default DonorPost;
