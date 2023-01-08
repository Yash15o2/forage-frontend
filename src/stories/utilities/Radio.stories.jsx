import React from 'react';
import Radio from '../../components/utilities/Radio';
import Center from '../Decorators/Center';
import ThemeDecorator from '../Decorators/ThemeProvider';

export default {
	title: 'Utilities/Radio',
	component: Radio,
	args: {
		...Radio.defaultProps,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator>
				<Center>{Story()}</Center>
			</ThemeDecorator>
		),
	],
};

const Template = (args) => <Radio {...args}></Radio>;

export const Basic = Template.bind({});
Basic.args = {
	labelText: 'Doner',
};
