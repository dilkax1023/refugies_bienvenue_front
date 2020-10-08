import React, { Component } from 'react';
// import AsyncSelect from 'react-select/async';

class Volunteers extends Component {
	state = {
		selectedVolunteer: [],
		volunteerData: [],
		volunteerID: {},
		volunteer: {},
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())

			.then((data) => {
				console.log(data);
				this.setState({ volunteerData: data, volunteerId: data._id });
			});
	}

	renderEveryVolunteer = (volunteer) => {
		return <img src={volunteer.avatar} alt="volunteer" />;
		// if the volunteer have profile pic
	};

	render() {
		const volunteers = [...this.state.volunteerData];
		const volunteersListe = volunteers.map((volunteer) => {
			return (
				<option key={volunteer.id}>
					{volunteer.name}
					{volunteer._id}
				</option>
			);
		});
		return (
			<div className="volunteers">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="exampleFormControlSelect1">
							<select
								className="form-control"
								id="exampleFormControlSelect1"
								value={this.state.selectedVolunteer}
								onChange={(e) => {
									console.log(e.target.value);
									this.setState({
										selectedVolunteer: e.target.value,
										volunteerId: e.target.value,
										// volunteerData: e.target.value,
									});
								}}
							>
								{volunteersListe}
							</select>
						</label>
					</div>
				</form>
			</div>
		);
	}
}
export default Volunteers;
