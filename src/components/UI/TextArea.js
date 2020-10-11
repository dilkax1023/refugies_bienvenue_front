import React from 'react';

const TextArea = ({ onChange, value, label, id }) => {
	return (
		<div className="form-group mt-2">
			<label htmlFor="exampleFormControlTextarea1">{label}</label>
			<textarea
				className="form-control"
				id="exampleFormControlTextarea1"
				rows="3"
				onChange={(e) => onChange(id, e.target.value)}
				value={value}
				placeholder={label}
			></textarea>
		</div>
	);
};

export default TextArea;
