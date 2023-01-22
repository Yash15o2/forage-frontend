import React from 'react';
import styled from 'styled-components';
import greetingTime from 'greeting-time';
import DonorPost from './DonorPost';
// import Logo from '../utilities/Logo';

function DonorDashboard() {
	return (
		<StyledDashboardContainer>
			{/* <StyledLogo>
				<div>
					<Logo rowDirection size="25px" text="25px" />
				</div>
			</StyledLogo> */}
			<StyledDonorDashboard>
				<StyledHeader>
					<p>{greetingTime(new Date())}</p>
					<h3>Hi👋, Person Name</h3>
				</StyledHeader>

				<StyledPostsScroll>
					<StyledPendingContainer>
						<p className="pending post-heading">Pending</p>
						<DonorPost />
					</StyledPendingContainer>

					<StyledWaitForAcknowledgement>
						<p className="wait-for-ack post-heading">
							Waiting for acknowledgement
						</p>
						<DonorPost accepted />
						<StyledEmptySpace />
					</StyledWaitForAcknowledgement>
				</StyledPostsScroll>
			</StyledDonorDashboard>
			<StyledEmptyColSpace />
		</StyledDashboardContainer>
	);
}

const StyledDashboardContainer = styled.div`
	height: 100%;
	display: flex;
`;

// const StyledLogo = styled.div`
// 	padding: 0 0 10px 0;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;

// 	div {
// 		@media only screen and (max-width: 1000px) {
// 			display: block;
// 		}
// 	}
// `;

const StyledDonorDashboard = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;

	.post-heading {
		font-size: 1rem;
		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 500;
	}
`;

const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;

	p,
	h3 {
		margin: 5px 0;
		line-height: 20px;
	}

	h3 {
		margin-bottom: 20px;
	}

	p {
		color: ${(props) => props.theme.colors.secondary['200'] + '99'};
	}
`;

const StyledPostsScroll = styled.div`
	display: flex;
	flex-direction: column;
	overflow: auto;
	height: 100%;
	gap: 40px;
	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

const StyledPendingContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	p {
		margin: 0;
	}
`;

const StyledWaitForAcknowledgement = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	p {
		margin: 0;
	}
`;

const StyledEmptySpace = styled.div`
	height: 20px;
`;

const StyledEmptyColSpace = styled.div`
	display: flex;
	width: 30vw;

	@media only screen and (max-width: 1250px) {
		width: 20vw;
	}

	@media only screen and (max-width: 1170px) {
		width: 10vw;
	}

	@media only screen and (max-width: 1100px) {
		width: 0;
	}
`;

export default DonorDashboard;
