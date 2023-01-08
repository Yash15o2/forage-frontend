import React from 'react';
import Logo from '../../components/utilities/Logo';
import Center from '../Decorators/Center';
import ThemeDecorator from '../Decorators/ThemeProvider';

export default {
	title: 'Utilities/Logo',
	component: Logo,
	args: {
		...Logo.defaultProps,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator>
				<Center>{Story()}</Center>
			</ThemeDecorator>
		),
	],
};

const Template = (args) => <Logo {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	size: '45px',
	text: '40px',
	rowDirection: false,
};
