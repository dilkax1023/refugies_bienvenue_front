import React from 'react';

const Button = props => {
	return (
		<a href={props.path} className='btn btn-success w-100 mt-4'>
			{props.name}
		</a>
	);
};

export default Button;
