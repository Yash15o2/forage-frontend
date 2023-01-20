import React from 'react';
import Input from '../../../components/utilities/Input';
import ThemeDecorator from '../../Decorators/ThemeProvider';
import Center from '../../Decorators/Center';
import { Field, Formik } from 'formik';

export default {
	title: 'Utilities/Input/FormikInput',
	component: Input,
	args: {
		...Input.defaultProps,
	},
	decorators: [
		(Story) => (
			<ThemeDecorator>
				<Center>
					<Formik
						initialValues={{ email: '' }}
						validate={(values) => {
							const errors = {};
							if (!values.email) {
								errors.email = 'Email is required';
							} else if (
								!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
							) {
								errors.email = 'Invalid email address';
							}
							return errors;
						}}
					>
						{Story()}
					</Formik>
				</Center>
			</ThemeDecorator>
		),
	],
};

const Template = (args) => (
	<Field name={'email'}>
		{({ field, form, meta }) => (
			<div>
				<Input
					field={field}
					meta={meta}
					placeholder="Enter your email"
					type="text"
				/>
			</div>
		)}
	</Field>
);

export const Basic = Template.bind({});
