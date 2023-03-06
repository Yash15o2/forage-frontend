import React from 'react';
import SideNavigation from '../../components/common/SideNavigation';
import Center from '../Decorators/Center';
import ThemeDecorator from '../Decorators/ThemeProvider';

export default {
	title: 'Components/SideNavigation',
	component: SideNavigation,
	args: {
		...SideNavigation.defaultProps,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator>
				<Center>{Story()}</Center>
			</ThemeDecorator>
		),
	],
};

const Template = (args) => <SideNavigation {...args}></SideNavigation>;

export const Basic = Template.bind({});
Basic.args = {
	userType: 'ngo',
};
