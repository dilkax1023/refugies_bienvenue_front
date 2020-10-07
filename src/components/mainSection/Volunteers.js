import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';

class Volunteers extends Component {
	state = { selectedVolunteers: [] };

	onChange = (selectedVolunteers) => {
		this.setstate({ selectedVolunteers: selectedVolunteers || [] });
		// this.onChange = this.onChange.bind(this);
	};
	// this.onChange = this.onChange.bind(this);
	loadOptions = async (inputText, callback) => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users`
		);
		const json = await response.json();

		callback(
			json.map((i) => ({
				label: i.name,
				value: i.id,
				username: i.username,
			}))
		);
	};

	renderEveryVolunteer = (volunteer) => {
		return <img src={volunteer.avatar} alt="volunteer" />;
		// if the volunteer have profile pic
	};
	render() {
		return (
			<div className="volunteers">
				<div>
					{this.state.selectedVolunteers.map(
						this.renderEveryVolunteer
					)}
				</div>

				<AsyncSelect
					value={this.state.selectedVolunteers}
					onChange={this.onChange}
					placeholder={'volunteers'}
					loadOptions={this.loadOptions}
				/>
			</div>
		);
	}
}
export default Volunteers;
