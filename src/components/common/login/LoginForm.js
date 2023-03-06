import { Formik, Field } from 'formik';
import React from 'react';
import styled from 'styled-components';
import Logo from '../../utilities/Logo';
import Input from '../../utilities/Input';
import Button from '../../utilities/Button';
import StyledLink from '../../utilities/StyledLink';
import * as Yup from 'yup';

function LoginForm() {
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email('Please enter valid email.')
			.required('Please enter your email.'),
		password: Yup.string()
			.min(8, 'Password must be more than 8 character.')
			.required('Please enter your password.'),
	});

	const handleLogin = (values) => {
        fetch('https://forage-server.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res => res.json())
			.then(data => {
				console.log(data);
			})
			.catch(err => {
				console.log(err);
        })
    }

	return (
		<StyledFormContainer>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
              			handleLogin(values);
              			setSubmitting(false);
              		}, 400);
				}}
			>
				{({ values, touched, errors, isSubmitting }) => (
					<StyledForm>
						<StyledHeader>
							<LogoContainer>
								<p className="heading">Welcome to</p>
								<Logo rowDirection text="60px" size="55px" />
							</LogoContainer>
							<p className="slogan">Login to make the difference</p>
						</StyledHeader>

						<StyledInputContainer>
							<Field name="email">
								{({ field, form, meta }) => (
									<Input
										field={field}
										meta={meta}
										placeholder="Enter your email"
										type="email"
									/>
								)}
							</Field>

							<Field name="password">
								{({ field, form, meta }) => (
									<Input
										field={field}
										meta={meta}
										placeholder="Enter your password"
										type="password"
									/>
								)}
							</Field>
						</StyledInputContainer>

						<Button disabled={isSubmitting} type="submit">
							{isSubmitting ? 'WAIT...' : 'LOG IN'}
						</Button>

						<StyledLink />
					</StyledForm>
				)}
			</Formik>
		</StyledFormContainer>
	);
}

const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: fit-content;
	width: 100%;
`;

const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
	width: fit-content;

	.heading {
		color: ${(props) => props.theme.colors.secondary['100'] + 'bb'};
		font-weight: 500;
		font-family: ${(props) => props.theme.fonts.primary};
		margin: 0;
		font-size: 1.1rem;
	}

	.slogan {
		color: ${(props) => props.theme.colors.neutral['200']};
		margin: 0;
	}
	/* border: 1px solid blue; */
`;

const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	align-items: center;
	/* border: 1px solid red; */
	width: 100%;
`;

const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	align-items: center;
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default LoginForm;
