import React from 'react';

const FormGroup = ({ label, type, onChange, value, id }) => {
	return (
		<div className='form-group'>
			<label>{label}</label>
			<input
				type={type}
				className='form-control'
				onChange={e => onChange(id, e.target.value)}
				value={value}
			/>
		</div>
	);
};

export default FormGroup;
