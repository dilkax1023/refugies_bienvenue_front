import React, { Component } from 'react';
// import AsyncSelect from 'react-select/async';

class Volunteers extends Component {
	state = {
		selectedVolunteer: [],
		volunteerData: [],
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())

			.then((data) => {
				console.log(data);
				this.setState({ volunteerData: data });
			});
	}

	renderEveryVolunteer = (volunteer) => {
		return <img src={volunteer.avatar} alt="volunteer" />;
		// if the volunteer have profile pic
	};
	render() {
		const volunteers = [...this.state.volunteerData];
		const volunteersListe = volunteers.map((volunteer) => {
			return <option key={volunteer.id}>{volunteer.name}</option>;
		});
		return (
			<div className="volunteers">
				<div></div>

				<div class="form-group">
					<label for="exampleFormControlSelect1"></label>
					<select
						class="form-control"
						id="exampleFormControlSelect1"
						value={this.state.selectedVolunteer}
						onChange={(e) => {
							console.log(e.target.value);
							this.setState({
								selectedVolunteer: e.target.value,
							});
						}}
					>
						{volunteersListe}
					</select>
				</div>
			</div>
		);
	}
}
export default Volunteers;
