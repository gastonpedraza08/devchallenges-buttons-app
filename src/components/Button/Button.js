import React from 'react';


import './Button.css';

export default function Button(props) {
	let { variant, color, disableShadow, disabled: customDisabled, startIcon, endIcon, size } = props;

	if (Object.keys(props).length === 0) {
		color = 'default';
	}

	return (
		<button
			variant={variant}
			color={color}
			customsize={size}
			disableshadow={disableShadow ? 'true' : 'false'}
			customdisabled={customDisabled ? 'true' : 'false'}
		>
			{startIcon && <Icon icon={startIcon} customClass='custom-mr' />}

			Default
			
			{endIcon && <Icon icon={endIcon} customClass='custom-ml' />}
		</button>
	);
}

function Icon({ icon, customClass }) {
	return (
		<i className={`fa fa-${icon} custom-icom ${customClass}`} aria-hidden="true"></i>
	);
}