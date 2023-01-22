import React from 'react';
import DonorPost from '../../components/donor/DonorPost';
import Center from '../Decorators/Center';
import ThemeDecorator from '../Decorators/ThemeProvider';

export default {
	title: 'Components/DonorPost',
	component: DonorPost,
	args: {
		...DonorPost.defaultProps,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator>
				<Center>{Story()}</Center>
			</ThemeDecorator>
		),
	],
};

const Template = (args) => <DonorPost {...args}></DonorPost>;

export const Basic = Template.bind({});
Basic.args = {
	accepted: true,
};
