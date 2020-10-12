import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Beneficiaires.css';

class AddLodgingContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//   name: "",

			//   volunteers: [],
			//   errorMessage: null,
			date: new Date('2020-06-10'),
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleSubmit(event) {
		alert('A form was submitted');
		fetch('http://localhost:3002/api/beneficiaries', {
			// http://localhost:3002/api/beneficiaries
			// add the adresse hergements here
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(this.state),
		}).then((res) => {
			// console.log(res);
			return res.json();
		});

		event.preventDefault();
	}
	onChange = (date) => {
		this.setState({ date: date });
	};
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-9 col-lg-10 main">
						<div className="container ">
							<h1>Hébergement</h1>
							<div className="identification">
								<h4>Identification</h4>
								<div className="row justify-content-md-center">
									<div className="col-xl-3">
										<form>
											<label>
												Nom
												<input
													type="text"
													className="form-control"
													name="lastName"
													onChange={this.handleChange}
												/>
											</label>
										</form>
									</div>
									<div className="col-xl-3">
										<form>
											<label>
												Prénom
												<input
													type="text"
													className="form-control"
													name="firstName"
													onChange={this.handleChange}
												/>
											</label>
										</form>
									</div>
								</div>
								<div className="row justify-content-md-center">
									<div className="col-xl-3">
										Date de naissance
										<DatePicker
											selected={this.state.date}
											onChange={this.onChange}
											name="age"
										/>
									</div>
								</div>
								<div className="row justify-content-md-center">
									<div className="col-xl-3">
										<form>
											<label>
												Numéro de téléphone
												<input
													className="form-control"
													type="text"
													name="phone"
													onChange={this.handleChange}
												/>
											</label>
										</form>
									</div>
									<div className="col-xl-3">
										Email
										<form>
											<label>
												<input
													className="form-control"
													type="text"
													name="mail"
													onChange={this.handleChange}
												/>
											</label>
										</form>
									</div>
								</div>
							</div>
							<div className="adresse">
								{/* adresses */}
								<h4>Adresse</h4>
								<div className="row justify-content-md-center">
									<div className="col-xl-3">
										Numéro de rue
										<form>
											<label>
												<input
													className="form-control"
													type="text"
													name="streetNumber"
													onChange={this.handleChange}
												/>
											</label>
										</form>
									</div>
									<div className="col-xl-3">
										Nom de rue
										<form>
											<label>
												<input
													className="form-control"
													type="text"
													name="streetName"
													onChange={this.handleChange}
												/>
											</label>
										</form>
									</div>
								</div>
								<div className="row justify-content-md-center">
									<div className="col-xl-3">
										Postal
										<form>
											<label>
												<input
													className="form-control"
													type="text"
													name="zipCode"
													onChange={this.handleChange}
												/>
											</label>
										</form>
									</div>
									<div className="col-xl-3">
										Ville
										<form>
											<label>
												<input
													className="form-control"
													type="text"
													name="city"
													onChange={this.handleChange}
												/>
											</label>
										</form>
									</div>
								</div>
							</div>
							{/* logement */}
							<div className="logement">
								<h4>Logement</h4>
								<div className="row justify-content-md-center">
									<div className="col-xl-3">
										Logement disponible?
										<form>
											<label>
												<select
													id="inputState"
													className="form-control"
												>
													<option defaultValue>
														Oui
													</option>
													<option>Non</option>
												</select>
											</label>
										</form>
									</div>
									<div className="col-xl-3">
										Type de logement?
										<form>
											<label>
												<input
													className="form-control"
													type="text"
													name="lodgingType"
													onChange={this.handleChange}
												/>
											</label>
										</form>
									</div>
								</div>
								<div className="row justify-content-md-center">
									<div className="col-xl-3">
										Date de disponbilité
										<DatePicker
											selected={this.state.date}
											onChange={this.onChange}
											name="availableFrom"
										/>
									</div>
									<div className="col-xl-3">
										Date de fin
										<DatePicker
											selected={this.state.date}
											onChange={this.onChange}
											name="availableTo"
										/>
									</div>
								</div>
								<div className="row justify-content-md-center">
									<div className="col-xl-3">
										Cohabitation en cours
										<form>
											<label>
												<input
													type="text"
													className="form-control"
													name="possees"
												/>
											</label>
										</form>
									</div>

									<div className="col-xl-3">
										Cohabitation passées
										<form>
											<label>
												<input
													type="text"
													className="form-control"
													name="possees"
												/>
											</label>
										</form>
									</div>
								</div>
								{/* <div className="row justify-content-md-center">
									<div className="col-xl-3">
										Date de début
										<DatePicker
											selected={this.state.date}
											onChange={this.onChange}
										/>
									</div>
									<div className="col-xl-3">
										Fin de cohabitation
										<DatePicker
											selected={this.state.date}
											onChange={this.onChange}
										/>
									</div>
								</div> */}
								<div className="row justify-content-md-center">
									<div className="col-xl-3">
										Commentaires
										<form>
											<textarea
												className="form-control"
												name="comments"
												onChange={this.handleChange}
											></textarea>
										</form>
									</div>
								</div>
							</div>

							<div className="row justify-content-md-center">
								<form onsubmit={this.handleSubmit}>
									<button
										type="submit"
										className="btn btn-outline-success"
									>
										{/* to add onClick={addBeneficier} */}
										Ajouter un bénéficiaire
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default AddLodgingContainer;
