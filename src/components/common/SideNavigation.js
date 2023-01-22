import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../utilities/Logo';
import Button from '../utilities/Button';
import Icon from '../utilities/Icon';
import Rate from '../common/Rate';

function SideNavigation(props) {
	return (
		<StyledSideNavigation>
			<Logo className="logo" size="55px" text="35px" />
			<NavigationContainer>
				{props.userType === 'admin' && (
					<>
						<StyledNavButton navButton>
							<Icon iconName="FaChartBar" size="20px" />
							<div className="text">Statistics</div>
						</StyledNavButton>

						<StyledNavButton navButton>
							<Icon iconName="HiUserGroup" size="20px" />
							<div className="text">Profiles</div>
						</StyledNavButton>
					</>
				)}
				{props.userType !== 'admin' && (
					<>
						<StyledNavButton navButton>
							<Icon iconName="RiLayout2Fill" size="20px" />
							<div className="text">Dashboard</div>
						</StyledNavButton>

						{props.userType === 'donor' && (
							<StyledNavButton navButton>
								<Icon iconName="FaHistory" size="20px" />
								<div className="text">History</div>
							</StyledNavButton>
						)}

						{props.userType === 'ngo' && (
							<StyledNavButton navButton>
								<Icon iconName="MdAddToPhotos" size="20px" />
								<div className="text">Added</div>
							</StyledNavButton>
						)}

						<div className="profile">
							<StyledNavButton navButton>
								<Icon iconName="IoPerson" size="20px" />
							</StyledNavButton>
						</div>

						<StyledNavButton navButton>
							<Icon iconName="FaHeadphonesAlt" size="20px" />
							<div className="text">Support</div>
						</StyledNavButton>
					</>
				)}

				<StyledNavButton navButton>
					<Icon iconName="MdOutlineLogout" size="20px" />
					<div className="text">Logout</div>
				</StyledNavButton>
			</NavigationContainer>

			{props.userType !== 'admin' && (
				<StyledRateContainer>
					<div className="star">
						<Icon iconName="HiStar" size="20px" />
					</div>
					<div className="rate">
						<Rate />
					</div>
				</StyledRateContainer>
			)}
		</StyledSideNavigation>
	);
}

const StyledSideNavigation = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	height: 100vh;
	width: fit-content;

	.profile {
		display: none;
	}

	@media only screen and (max-width: 1000px) {
		.logo {
			display: none;
		}
		.profile {
			display: block;
		}
	}
`;

const NavigationContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 60px;
`;

const StyledNavButton = styled(Button)`
	color: ${(props) => props.theme.colors.neutral['300']};

	.text {
		font-weight: 500;
		font-family: ${(props) => props.theme.fonts.primary};
	}

	&:hover,
	&:focus {
		color: ${(props) => props.theme.colors.primary['200']};
	}

	@media only screen and (max-width: 1000px) {
		.text {
			display: none;
		}
	}
`;

const StyledRateContainer = styled.div`
	display: block;

	.star {
		display: none;
		color: ${(props) => props.theme.colors.neutral['300']};

		&:hover {
			color: ${(props) => props.theme.colors.yellow['100']};
		}
	}

	@media only screen and (max-width: 1000px) {
		.rate {
			display: none;
		}
		.star {
			display: block;
		}
	}
`;

SideNavigation.propTypes = {
	userType: PropTypes.string,
};

SideNavigation.defaultProps = {
	userType: 'donor',
};

export default SideNavigation;
