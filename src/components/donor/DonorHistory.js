import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../utilities/Button';
import Icon from '../utilities/Icon';
import DonorPost from './DonorPost';

function DonorHistory() {
	const [sort, setSort] = useState(false);
	return (
		<StyledHistoryContainer>
			<StyledDonorHistory>
				<StyledHeader>
					<h3>History</h3>
				</StyledHeader>

				<StyledSortButton
					navButton
					theme="secondary"
					onClick={() => setSort(!sort)}
				>
					<Icon iconName="IoCalendar" />
					Sort by date
					<Icon
						size="20px"
						iconName={sort ? 'MdArrowDropUp' : 'MdArrowDropDown'}
					/>
				</StyledSortButton>

				<StyledPostsScroll>
					<StyledPostContainer>
						<DonorPost isAcknowledged accepted />
					</StyledPostContainer>
				</StyledPostsScroll>

				<StyledCreatePostButton>
					<Icon iconName="FaPen" size="26px" />
				</StyledCreatePostButton>
			</StyledDonorHistory>
			<StyledEmptyColSpace />
		</StyledHistoryContainer>
	);
}
const StyledCreatePostButton = styled(Button)`
	position: absolute;
	bottom: -5px;
	right: 5px;
	border-radius: 60px;
	padding: 10px 40px;

	@media only screen and (min-width: 800px) {
		display: none;
	}
`;

const StyledHistoryContainer = styled.div`
	height: 100%;
	display: flex;
`;

const StyledDonorHistory = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;

	h3 {
		margin: 5px 0;
		line-height: 20px;
	}
`;

const StyledSortButton = styled(Button)`
	margin: 20px 0;
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

const StyledPostContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	p {
		margin: 0;
	}
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

export default DonorHistory;
