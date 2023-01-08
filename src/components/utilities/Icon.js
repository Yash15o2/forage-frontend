import React from 'react';
import PropTypes from 'prop-types';
import * as antDesignIcons from 'react-icons/ai';
import * as bootstrapIcons from 'react-icons/bs';
import * as boxIcons from 'react-icons/bi';
import * as circumIcons from 'react-icons/ci';
import * as devIcons from 'react-icons/di';
import * as featherIcons from 'react-icons/fi';
import * as flatColorIcons from 'react-icons/fc';
import * as fontAwesome from 'react-icons/fa';
import * as gameIcons from 'react-icons/gi';
import * as githubOctIcons from 'react-icons/go';
import * as grommetIcons from 'react-icons/gr';
import * as heroIcons2 from 'react-icons/hi2';
import * as icomoonIcons from 'react-icons/im';
import * as ionIcons5 from 'react-icons/io5';
import * as materialDesign from 'react-icons/md';
import * as remixIcons from 'react-icons/ri';
import * as simpleIcons from 'react-icons/si';
import * as simpleLineIcons from 'react-icons/sl';
import * as tablerIcons from 'react-icons/tb';
import * as themifyIcons from 'react-icons/tfi';
import * as typIcons from 'react-icons/ti';
import * as vsCodeIcons from 'react-icons/vsc';
import * as weatherIcons from 'react-icons/wi';

function Icon({ iconName, size, color, ...props }) {
	const throwError = () => {
		return <img alt="No icon available" />;
	};
	let iconPackage = undefined;

	try {
		if (iconName.startsWith('Ai')) {
			iconPackage = antDesignIcons[iconName];
		} else if (iconName.startsWith('Bs')) {
			iconPackage = bootstrapIcons[iconName];
		} else if (iconName.startsWith('Bi')) {
			iconPackage = boxIcons[iconName];
		} else if (iconName.startsWith('Ci')) {
			iconPackage = circumIcons[iconName];
		} else if (iconName.startsWith('Di')) {
			iconPackage = devIcons[iconName];
		} else if (iconName.startsWith('Fi')) {
			iconPackage = featherIcons[iconName];
		} else if (iconName.startsWith('Fc')) {
			iconPackage = flatColorIcons[iconName];
		} else if (iconName.startsWith('Fa')) {
			iconPackage = fontAwesome[iconName];
		} else if (iconName.startsWith('Gi')) {
			iconPackage = gameIcons[iconName];
		} else if (iconName.startsWith('Go')) {
			iconPackage = githubOctIcons[iconName];
		} else if (iconName.startsWith('Gr')) {
			iconPackage = grommetIcons[iconName];
		} else if (iconName.startsWith('Hi')) {
			iconPackage = heroIcons2[iconName];
		} else if (iconName.startsWith('Im')) {
			iconPackage = icomoonIcons[iconName];
		} else if (iconName.startsWith('Io')) {
			iconPackage = ionIcons5[iconName];
		} else if (iconName.startsWith('Md')) {
			iconPackage = materialDesign[iconName];
		} else if (iconName.startsWith('Ri')) {
			iconPackage = remixIcons[iconName];
		} else if (iconName.startsWith('Si')) {
			iconPackage = simpleIcons[iconName];
		} else if (iconName.startsWith('Sl')) {
			iconPackage = simpleLineIcons[iconName];
		} else if (iconName.startsWith('Tb')) {
			iconPackage = tablerIcons[iconName];
		} else if (iconName.startsWith('Tfi')) {
			iconPackage = themifyIcons[iconName];
		} else if (iconName.startsWith('Ti')) {
			iconPackage = typIcons[iconName];
		} else if (iconName.startsWith('Vsc')) {
			iconPackage = vsCodeIcons[iconName];
		} else if (iconName.startsWith('Wi')) {
			iconPackage = weatherIcons[iconName];
		}
		if (iconPackage === undefined) return throwError();

		const icon = React.createElement(iconPackage);

		return (
			<span
				style={{
					display: 'inline-flex',
					fontSize: size ? size : 'inherit',
					color: color ? color : 'inherit',
				}}
				{...props}
			>
				{icon}
			</span>
		);
	} catch (e) {
		return throwError();
	}
}

Icon.propTypes = {
	iconName: PropTypes.string,
	size: PropTypes.string,
	color: PropTypes.string,
};

Icon.defaultProps = {
	iconName: 'MdCloud',
};

export default Icon;
