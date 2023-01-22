import React from 'react';
import Notification from '../../components/common/Notification';
import Center from '../Decorators/Center';
import ThemeDecorator from '../Decorators/ThemeProvider';

export default {
	title: 'Components/Notification',
	component: Notification,
	args: {
		...Notification.defaultProps,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator>
				<Center>{Story()}</Center>
			</ThemeDecorator>
		),
	],
};

const Template = (args) => <Notification {...args}></Notification>;

export const Basic = Template.bind({});
Basic.args = {
	notificationType: 'timeout',
	time: '10:05 AM',
	date: '12/01/2023',
};
