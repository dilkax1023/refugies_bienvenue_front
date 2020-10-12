import React from 'react';
import DatePicker from 'react-datepicker';

class FormGroup extends React.Component {
	render() {
		const { label, type, onChange, value, date, id } = this.props;

		let input = (
			<input
				type={type}
				className="form-control"
				placeholder={label}
				onChange={(e) => onChange(id, e.target.value)}
				value={value}
			/>
		);

		if (date) {
			input = (
				<DatePicker
					selected={value}
					onChange={(date) => onChange(id, date)}
					showTimeSelect
					timeFormat="HH:mm"
					timeIntervals={15}
					timeCaption="time"
					dateFormat="MMMM d, yyyy h:mm aa"
					id="date-picker"
					placeholderText="choisir un date"
				/>
			);
		}

		return (
			<div className="form-group  d-flex flex-column">
				<label>{label || date}</label>
				{input}
			</div>
		);
	}
}

export default FormGroup;
