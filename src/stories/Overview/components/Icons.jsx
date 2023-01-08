import React, { Fragment, useState } from 'react';
import Icon from '../../../components/utilities/Icon';
import icons from '../../jsons/icons.json';

function Icons() {
	const [iconPackage, setIconPackage] = useState('Ant Design Icons');
	const [searchText, setSearchText] = useState('');
	const iconPackages = Object.keys(icons);

	return (
		<Fragment>
			<div className="icons">
				<div className="sidebar-section">
					{iconPackages.map((key, i) => (
						<span key={i} onClick={() => setIconPackage(key)}>
							{key}
						</span>
					))}
				</div>
				<div className="icons-section">
					<h2>{iconPackage}</h2>
					<input
						type="text"
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
						placeholder="Search..."
					/>
					<ul>
						{icons[iconPackage].map((iconName, i) =>
							iconName.toLowerCase().includes(searchText.toLowerCase()) ? (
								<li key={i}>
									<span>&#x2022;</span>
									<Icon iconName={iconName} size="28px" />
									<span className="iconName">{iconName}</span>
								</li>
							) : null
						)}
					</ul>
				</div>
			</div>
		</Fragment>
	);
}

export default Icons;
