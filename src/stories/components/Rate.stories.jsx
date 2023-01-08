import React from 'react';
import Rate from '../../components/common/Rate';
import Center from '../Decorators/Center';
import ThemeDecorator from '../Decorators/ThemeProvider';

export default {
	title: 'Components/Rate',
	component: Rate,
	args: {
		...Rate.defaultProps,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator>
				<Center>{Story()}</Center>
			</ThemeDecorator>
		),
	],
};

const Template = (args) => <Rate {...args}></Rate>;

export const Basic = Template.bind({});
Basic.args = {};
