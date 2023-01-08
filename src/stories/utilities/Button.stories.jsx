import React from 'react';
import Button from '../../components/utilities/Button';
import Center from '../Decorators/Center';
import ThemeDecorator from '../Decorators/ThemeProvider';
import Icon from '../../components/utilities/Icon';

export default {
	title: 'Utilities/Button',
	component: Button,
	args: {
		...Button.defaultProps,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator>
				<Center>{Story()}</Center>
			</ThemeDecorator>
		),
	],
};

Button.displayName = 'Button';
const Template = (args) => <Button {...args}></Button>;

export const Basic = Template.bind({});
Basic.args = {
	children: 'Signup',
};

export const IconButton = Template.bind({});
IconButton.args = {
	children: <Icon iconName="FiLogIn" />,
};

export const ButtonWithLeftIconText = Template.bind({});
ButtonWithLeftIconText.args = {
	children: (
		<>
			<Icon iconName="FiLogIn" />
			SignUp
		</>
	),
};

export const ButtonWithRightIconText = Template.bind({});
ButtonWithRightIconText.args = {
	children: (
		<>
			SignUp <Icon iconName="FiLogIn" size="24px" />
		</>
	),
};
