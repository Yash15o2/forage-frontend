import React from 'react';
import styled from 'styled-components';
import Button from '../utilities/Button';
import Icon from '../utilities/Icon';
import Notification from '../utilities/Notification';

function NotificationPage() {
	return (
		<StyledNotificationPage>
			<StyledNotificationBackButton navButton theme="secondary">
				<Icon iconName="MdOutlineArrowBackIos" size="25px" />
				Notifications
			</StyledNotificationBackButton>
			<StyledNotificationWrapper>
				<Notification />
				<Notification notificationType="accept" />
				<Notification notificationType="timeout" />
			</StyledNotificationWrapper>
		</StyledNotificationPage>
	);
}

const StyledNotificationPage = styled.div`
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 50px;
`;

const StyledNotificationBackButton = styled(Button)`
	display: flex;
	gap: 25px;
	font-size: 1rem;
	font-weight: bold;
`;

const StyledNotificationWrapper = styled.div`
	height: 85vh;
	display: flex;
	flex-direction: column;
	gap: 20px;
	overflow: auto;

	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

export default NotificationPage;
