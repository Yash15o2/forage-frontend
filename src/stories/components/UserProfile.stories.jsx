import React from 'react';
import UserProfile from '../../components/common/UserProfile';
import Center from '../Decorators/Center';
import ThemeDecorator from '../Decorators/ThemeProvider';

export default {
	title: 'Components/UserProfile',
	component: UserProfile,
	args: {
		...UserProfile.defaultProps,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator>
				<Center>{Story()}</Center>
			</ThemeDecorator>
		),
	],
};

const Template = (args) => <UserProfile {...args}></UserProfile>;

export const Basic = Template.bind({});
Basic.args = {
	userName: 'Person Demo',
};
