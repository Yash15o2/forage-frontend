import React from 'react';
import Input from '../../../components/utilities/Input';
import Center from '../../Decorators/Center';
import ThemeDecorator from '../../Decorators/ThemeProvider';

export default {
	title: 'Utilities/Input/Input',
	component: Input,
	args: {
		...Input.defaultProps,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator>
				<Center>{Story()}</Center>
			</ThemeDecorator>
		),
	],
};

const Template = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	type: 'email',
	height: '48px',
	placeholder: 'example@xyz.com',
};
