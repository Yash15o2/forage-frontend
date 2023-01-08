import React from 'react';
import ProfileImage from '../../components/common/ProfileImage';
import Center from '../Decorators/Center';
import ThemeDecorator from '../Decorators/ThemeProvider';

export default {
	title: 'Components/ProfileImage',
	component: ProfileImage,
	args: {
		...ProfileImage.defaultProps,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator>
				<Center>{Story()}</Center>
			</ThemeDecorator>
		),
	],
};

const Template = (args) => <ProfileImage {...args}></ProfileImage>;

export const Basic = Template.bind({});
Basic.args = {
	size: '100px',
};
