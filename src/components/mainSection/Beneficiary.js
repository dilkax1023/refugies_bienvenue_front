// import React, { useState } from "react";
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Volunteers from './Volunteers';
import './Beneficiaires.css';

class Beneficiaires extends Component {
	constructor(props) {
		super(props);
		this.state = {
			beneficiairie: {},
			errorMessage: null,
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
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(this.state),
		}).then((res) => {
			console.log(res);
			return res.json();
		});

		event.preventDefault();
	}

	onChange = (date) => {
		this.setState({ date: date });
	};

	render() {
		return (
			<div className="container ">
				<h1>Bénéficiaire</h1>

				<div className="identification">
					<h4>Identification</h4>
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							Nom
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										className="form-control"
										type="text"
										name="lastName"
										onChange={this.handleChange}
									/>
								</label>
							</form>
						</div>

						<div className="col-xl-3 ">
							Prénom
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										className="form-control"
										type="text"
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
								name="birthDate"
							/>
						</div>

						<div className="col-xl-3">
							Sexe
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										text-align="items-center"
										className="form-control"
										type="text"
										name="gender"
										onChange={this.handleChange}
									/>
								</label>
							</form>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							<form onSubmit={this.handleSubmit}>
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
							<form onSubmit={this.handleSubmit}>
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
							<form onSubmit={this.handleSubmit}>
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
							<form onSubmit={this.handleSubmit}>
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
							<form onSubmit={this.handleSubmit}>
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
							<form onSubmit={this.handleSubmit}>
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

				{/* benevole referent */}
				<div className="benevole">
					<h4>Bénévole Référent et autres</h4>
					{/* <h2>{this.state.volunteer.firstName}</h2> */}
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							Bénevole
							<Volunteers />
							<input
								type="text" // hidden
								key="volunteer._id"
								name="volunteerId"
								onChange={this.handleChange}
							></input>
						</div>

						<div className="col-xl-3">
							Permis de conduire
							<form onSubmit={this.handleSubmit}>
								<label>
									<select
										id="inputState"
										name="hasDrivingLicence"
										className="form-control"
										onChange={this.handleChange}
									>
										<option defaultValue></option>
										<option>Oui</option>
										<option>Non</option>
									</select>
								</label>
							</form>
						</div>
					</div>

					{/* date arrive en france */}
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							Date d'entrée en RB
							{/* <input
                type="text"
                name="dateArrivalAssociation"
                onChange={this.handleChange}
              /> */}
							<DatePicker
								selected={this.state.date}
								onChange={this.onChange}
								name="dateArrivalAssociation"
							/>
						</div>
						<div className="col-xl-3">
							{/* <input
                  type="text"
                  name="dateExitAssociation"
                  onChange={this.handleChange}
                /> */}
							Fin de suivi par RB?
							<DatePicker
								selected={this.state.date}
								onChange={this.onChange}
								name="dateExitAssociation"
							/>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							Date d'arrivée en France
							<DatePicker
								selected={this.state.date}
								onChange={this.onChange}
								name="dateArrivalFrance"
							/>
						</div>

						<div className="col-xl-3">
							{/* <label>
              <input
                type="text"
                name="datePiObtaining"
                onChange={this.handleChange}
              />
              <p>
                Date d’obtention de la PI ( Deux types de protections : Le
                statut de réfugié et la protection subsidiaire)
              </p>
            </label> */}
							Date d’obtention de la PI
							<DatePicker
								selected={this.state.date}
								onChange={this.onChange}
								name="datePiObtaining"
							/>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							<label>
								{/* <input type="text" name="date" onChange={this.handleChange} /> */}
								Date du prochain RDV
								<DatePicker
									selected={this.state.date}
									onChange={this.onChange}
								/>
							</label>
						</div>
						<div className="col-xl-3">
							<label>
								Numéro ADGREF
								<input
									className="form-control"
									type="text"
									name="agdrefNumber"
									onChange={this.handleChange}
								/>
							</label>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							Niveau de français (A1, A2, B1, B2, C1, C2)
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										className="form-control"
										type="text"
										name="frenchLevelComments"
										onChange={this.handleChange}
									/>
								</label>
							</form>
						</div>
					</div>
				</div>
				{/* bancaire */}
				<div className="bancaire">
					<h4>Compte Bancaire</h4>
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							<form onSubmit={this.handleSubmit}>
								<label>
									Compte bancaire?
									<select
										id="inputState"
										name="isBankAccount"
										className="form-control"
										onChange={this.handleChange}
									>
										<option defaultValue></option>
										<option>Oui</option>
										<option>Non</option>
									</select>
								</label>
							</form>
						</div>

						<div className="col-xl-3">
							Nom de banque
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										className="form-control"
										type="text"
										name="bankName"
										onChange={this.handleChange}
									/>
								</label>
							</form>
						</div>
					</div>
					{/* Si oui, depuis quand
							<DatePicker
								selected={this.state.date}
								onChange={this.onChange}
							/>
						</div>
					</div> */}
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							DA
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										className="form-control"
										type="text"
										name="cirDaStatus"
										onChange={this.handleChange}
									/>
								</label>
							</form>
						</div>
						<div className="col-xl-3">
							CIR
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										className="form-control"
										type="text"
										name="cirOrDa"
										onChange={this.handleChange}
									/>
								</label>
							</form>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							Commentaires
							<form onSubmit={this.handleSubmit}>
								<textarea
									className="form-control"
									name="statusComments"
									onChange={this.handleChange}
								></textarea>
							</form>
						</div>
					</div>
				</div>

				{/* formations */}
				<div className="formation">
					<h4>Formation</h4>
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							Formation actuelle
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										className="form-control"
										type="text"
										name="currentTraining"
										onChange={this.handleChange}
									/>
								</label>
							</form>
						</div>
						<div className="col-xl-3">
							Formation souahaité
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										className="form-control"
										type="text"
										name="wishedTraining"
										onChange={this.handleChange}
									/>
								</label>
							</form>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3 ">
							Accès à la formation?
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										className="form-control"
										type="text"
										name="trainingAccessMode"
										onChange={this.handleChange}
									/>
								</label>
							</form>
						</div>

						<div className="col-xl-3 ">
							Commentaires
							<form onSubmit={this.handleSubmit}>
								<textarea
									className="form-control"
									name="trainingComments"
									onChange={this.handleChange}
								></textarea>
							</form>
						</div>
					</div>
				</div>
				{/* travail */}
				<div className="profession">
					<h4>Profession</h4>
					<div className="row justify-content-md-center">
						<div className="col-xl-3 ">
							Profession actuelle
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										className="form-control"
										type="text"
										name="currentJob"
										onChange={this.handleChange}
									/>
								</label>
							</form>
						</div>
						<div className="col-xl-3 ">
							Profession souahaité
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										className="form-control"
										type="text"
										name="wishedJob"
										onChange={this.handleChange}
									/>
								</label>
							</form>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3 ">
							Accés a la profession
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										className="form-control"
										type="text"
										name="jobaccessMode"
										onChange={this.handleChange}
									/>
								</label>
							</form>
						</div>

						<div className="col-xl-3 ">
							Revenus?
							<form onSubmit={this.handleSubmit}>
								<label>
									<select
										id="inputState"
										name="hasIncome"
										className="form-control"
										onChange={this.handleChange}
									>
										<option defaultValue></option>
										<option>Oui</option>
										<option>Non</option>
									</select>
								</label>
							</form>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3 ">
							Montant mensuel
							<form onSubmit={this.handleSubmit}>
								<label>
									<input
										className="form-control"
										type="text"
										name="incomeValue"
										onChange={this.handleChange}
									/>
								</label>
							</form>
						</div>
						<div className="col-xl-3 ">
							CV + LDM
							<form
								onSubmit={this.handleSubmit}
								encType="multipart/form-data"
							>
								<label>
									<input
										type="file"
										onChange={this.handleChange}
										name="nom"
									/>
								</label>
							</form>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3 ">
							Commentaire
							<form onSubmit={this.handleSubmit}>
								<textarea
									className="form-control"
									name="jobComments"
									onChange={this.handleChange}
								></textarea>
							</form>
						</div>
					</div>
				</div>
				{/* santé */}
				<div className="sante">
					<h4>Santé</h4>
					<div className="row justify-content-md-center">
						<div className="col-xl-3 ">
							CMU?
							<form onSubmit={this.handleSubmit}>
								<label>
									<select
										id="inputState"
										name="hasCmu"
										className="form-control"
										onChange={this.handleChange}
									>
										<option defaultValue></option>
										<option>Oui</option>
										<option>Non</option>
									</select>
								</label>
							</form>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3 ">
							Si oui, date de début
							<DatePicker
								selected={this.state.date}
								onChange={this.onChange}
								onSubmit={this.handleSubmit}
								name="cmuStartDate"
							/>
						</div>
						<div className="col-xl-3 ">
							Date de fin
							<DatePicker
								selected={this.state.date}
								onChange={this.onChange}
								onSubmit={this.handleSubmit}
								name="cmuEndDate"
							/>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3 ">
							Commentaire
							<form onSubmit={this.handleSubmit}>
								<textarea
									className="form-control"
									name="healthComments"
									onChange={this.handleChange}
								></textarea>
							</form>
						</div>
					</div>
				</div>
				{/* Logement */}
				<div className="logement">
					<h4>Logement</h4>
					<div className="row justify-content-md-center">
						<div className="col-xl-3 ">
							Accès au parc privé?
							<form onSubmit={this.handleSubmit}>
								<label>
									<select
										id="inputState"
										className="form-control"
										name="accessPrivatePark"
										onChange={this.handleChange}
									>
										<option defaultValue></option>
										<option>Oui</option>
										<option>Non</option>
									</select>
								</label>
							</form>
						</div>
						<div className="col-xl-3 ">
							LS + DALO?
							<form onSubmit={this.handleSubmit}>
								<label>
									<select
										id="inputState"
										className="form-control"
										name="requestLsDalo"
										onChange={this.handleChange}
									>
										<option defaultValue></option>
										<option>Oui</option>
										<option>Non</option>
									</select>
								</label>
							</form>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3 ">
							Si oui, depuis quand?
							{/* <form>
                  <label>
                    <input type="text" name="nom" />
                    <p>Si oui, depuis quand: jj/mm/aa</p>
                  </label>
                </form> */}
							<DatePicker
								selected={this.state.date}
								onChange={this.onChange}
								name="dateRequestLsDalo"
							/>
						</div>
						<div className="col-xl-3 ">
							<p>SIAO?</p>
							<form onSubmit={this.handleSubmit}>
								<label>
									<select
										id="inputState"
										className="form-control"
										name="siao"
										onChange={this.handleChange}
									>
										<option defaultValue></option>
										<option>Oui</option>
										<option>Non</option>
									</select>
								</label>
							</form>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3 ">
							Commentaire
							<form>
								<textarea className="form-control"></textarea>
							</form>
						</div>
					</div>
				</div>
				<div className="row justify-content-md-center">
					<form onSubmit={this.handleSubmit}>
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
		);
	}
}

export default Beneficiaires;
