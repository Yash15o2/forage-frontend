import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../utilities/Icon';

function Notification(props) {
	return (
		<StyledNotificationContainer>
			<StyledNotification className={props.notificationType + '-bg'}>
				{props.notificationType === 'karma' && (
					<StyledNotificationIcon className={props.notificationType}>
						<Icon iconName="ImCoinEuro" size="30px" color="#fff" />
					</StyledNotificationIcon>
				)}
				{props.notificationType === 'accept' && (
					<StyledNotificationIcon className={props.notificationType}>
						<Icon iconName="FaRegCheckSquare" size="30px" color="#fff" />
					</StyledNotificationIcon>
				)}
				{props.notificationType === 'timeout' && (
					<StyledNotificationIcon className={props.notificationType}>
						<Icon iconName="IoStopwatchOutline" size="30px" color="#fff" />
					</StyledNotificationIcon>
				)}
				<StyledMessage>
					<StyledHeadingContainer>
						{props.notificationType === 'karma' && <h5>Karma</h5>}
						{props.notificationType === 'accept' && <h5>Accept</h5>}
						{props.notificationType === 'timeout' && <h5>Timeout</h5>}
						<span>
							{props.time} - {props.date}
						</span>
					</StyledHeadingContainer>
					{props.notificationType === 'karma' && (
						<p>You got +1 Karma count. Keep going!</p>
					)}
					{props.notificationType === 'accept' && <p>{props.acceptMessage}</p>}
					{props.notificationType === 'timeout' && (
						<p>Your pending request has been vanished.</p>
					)}
				</StyledMessage>
			</StyledNotification>
		</StyledNotificationContainer>
	);
}

const StyledNotificationContainer = styled.div`
	.karma-bg {
		background-image: linear-gradient(
			to right,
			${(props) => props.theme.colors.primary['100'] + '66'} 10%,
			#f5f7fa 90%
		);
	}

	.accept-bg {
		background-image: linear-gradient(
			to right,
			${(props) => props.theme.colors.yellow['100'] + '66'} 10%,
			#f5f7fa 90%
		);
	}

	.timeout-bg {
		background-image: linear-gradient(
			to right,
			${(props) => props.theme.colors.pink['100'] + '66'} 10%,
			#f5f7fa 90%
		);
	}
`;

const StyledNotification = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 15px;
	border-radius: 16px;
	padding: 20px 20px;
	width: fit-content;

	.karma {
		background-color: ${(props) => props.theme.colors.primary['100']};
		box-shadow: 0 4px 12px
			${(props) => props.theme.colors.primary['100'] + '99'};
	}
	.accept {
		background-color: ${(props) => props.theme.colors.yellow['100']};
		box-shadow: 0 4px 12px ${(props) => props.theme.colors.yellow['100'] + '99'};
	}
	.timeout {
		background-color: ${(props) => props.theme.colors.pink['100']};
		box-shadow: 0 4px 12px ${(props) => props.theme.colors.pink['100'] + '99'};
	}
`;

const StyledNotificationIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px;
	border-radius: 60px;
`;

const StyledHeadingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	h5 {
		font-family: ${(props) => props.theme.fonts.primary};
		margin: 0;
		color: ${(props) => props.theme.colors.secondary['200']};
	}

	span {
		font-family: ${(props) => props.theme.fonts.secondary};
		color: ${(props) => props.theme.colors.secondary['100']};
		font-size: 0.7rem;
		font-weight: 500;
	}
`;

const StyledMessage = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3px;

	p {
		margin: 0;
		font-family: ${(props) => props.theme.fonts.secondary};
		color: ${(props) => props.theme.colors.secondary['100']};
		font-size: 0.8rem;
		width: 250px;
	}
`;

Notification.propTypes = {
	notificationType: PropTypes.string, //Karma, Accept, Timeout
	time: PropTypes.string,
	date: PropTypes.string,
	acceptMessage: PropTypes.string,
};

Notification.defaultProps = {
	notificationType: 'karma',
	time: '12:30 PM',
	date: '21/01/2023',
	acceptMessage:
		'Your request has been accepted by Shivaay Welfare Foundation.',
};

export default Notification;
