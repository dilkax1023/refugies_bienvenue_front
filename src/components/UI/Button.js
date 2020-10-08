import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
	const { path, name, styling } = props;
	return (
		<NavLink
			to={path}
			className={styling ? styling : 'btn btn-info w-75 mt-4'}
			activeClassName="activeclass"
		>
			{name}
		</NavLink>
	);
};

export default Button;
