import React from 'react';
import Center from '../Decorators/Center';
import ThemeDecorator from '../Decorators/ThemeProvider';
import StyledLink from '../../components/utilities/StyledLink';

export default {
	title: 'Utilities/StyledLink',
	component: StyledLink,
	args: {
		...StyledLink.defaultProps,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator>
				<Center>{Story()}</Center>
			</ThemeDecorator>
		),
	],
};

const Template = (args) => <StyledLink {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	size: '45px',
	text: '40px',
	rowDirection: false,
};
