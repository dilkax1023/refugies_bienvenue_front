import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = props => {
	return (
		<NavLink to={props.path} className='btn btn-success w-100 mt-4'>
			{props.name}
		</NavLink>
	);
};

export default Button;
