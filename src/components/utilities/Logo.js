import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

function Logo(props) {
	return (
		<StyledLogo {...props}>
			<svg
				width={props.size}
				height={props.size}
				viewBox="0 0 75 75"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					y="7"
					width="74.281"
					height="12.6053"
					rx="6.30263"
					fill="url(#paint0_linear_1312_9)"
				/>
				<rect
					y="30.4097"
					width="74.281"
					height="12.6053"
					rx="6.30263"
					fill="url(#paint1_linear_1312_9)"
					fillOpacity="0.2"
				/>
				<rect
					y="53.8193"
					width="74.281"
					height="12.6053"
					rx="6.30263"
					fill="url(#paint2_linear_1312_9)"
					fillOpacity="0.2"
				/>
				<rect
					y="30.4097"
					width="51.7716"
					height="12.6053"
					rx="6.30263"
					fill="url(#paint3_linear_1312_9)"
				/>
				<rect
					y="53.8193"
					width="26.1109"
					height="12.6053"
					rx="6.30263"
					fill="url(#paint4_linear_1312_9)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_1312_9"
						x1="74.281"
						y1="13.3026"
						x2="-1.29706e-07"
						y2="13.3026"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#00E4A1" />
						<stop offset="1" stopColor="#00D495" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_1312_9"
						x1="74.2809"
						y1="36.7123"
						x2="25.4356"
						y2="36.7123"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#00E4A1" />
						<stop offset="1" stopColor="#00E4A1" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_1312_9"
						x1="74.281"
						y1="60.122"
						x2="-26.5611"
						y2="60.122"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#00E4A1" />
						<stop offset="1" stopColor="#00E4A1" stopOpacity="0" />
					</linearGradient>
					<linearGradient
						id="paint3_linear_1312_9"
						x1="51.7716"
						y1="36.7123"
						x2="-4.72795e-07"
						y2="36.7123"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#00E4A1" />
						<stop offset="1" stopColor="#00D495" />
					</linearGradient>
					<linearGradient
						id="paint4_linear_1312_9"
						x1="26.1109"
						y1="60.122"
						x2="1.48352e-06"
						y2="60.1219"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#00E4A1" />
						<stop offset="1" stopColor="#00D495" />
					</linearGradient>
				</defs>
			</svg>
			FORAGE
		</StyledLogo>
	);
}

const StyledLogo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: ${(props) => props.text};
	color: ${(props) => props.theme.colors.secondary['200']};
	font-weight: bold;
	gap: 8px;

	${(props) =>
		props.rowDirection &&
		css`
			flex-direction: row;
			gap: 10px;
		`}
`;

Logo.propTypes = {
	size: PropTypes.string,
	text: PropTypes.string,
	rowDirection: PropTypes.bool,
};

Logo.defaultProps = {
	size: '45px',
	text: '40px',
	rowDirection: false,
};

export default Logo;
