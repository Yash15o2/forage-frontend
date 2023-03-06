import React from 'react';
import NotificationPage from '../../components/common/NotificationPage';
import Center from '../Decorators/Center';
import ThemeDecorator from '../Decorators/ThemeProvider';

export default {
	title: 'Components/NotificationPage',
	component: NotificationPage,
	args: {
		...NotificationPage.defaultProps,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator>
				<Center>{Story()}</Center>
			</ThemeDecorator>
		),
	],
};

const Template = (args) => <NotificationPage {...args}></NotificationPage>;

export const Basic = Template.bind({});
Basic.args = {};
