// import React, { useState } from "react";
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
// import Select from 'react-select';
// import AsyncSelect from 'react-select/async';
import Volunteers from './Volunteers';
import 'react-datepicker/dist/react-datepicker.css';
import './Beneficiaires.css';

class Beneficiaires extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			beneficiairie: {
				firstName: '',
				lastName: '',
				birthDate: '',
				gender: '',
				phone: '',
				mail: '',
				dateArrivalFrance: '',
				dateArrivalAssociation: '',
				dateExitAssociation: '',
				datePiObtaining: '',
				agdrefNumber: '',
				cirOrDa: '',
				cirDaStatus: '',
				isBankAccount: false,
				bankName: '',
				hasDrivingLicence: false,
				drivingLicenceDate: '',
				administrativeComments: '',
				hasCmu: false,
				cmuStartDate: '',
				cmuEndDate: '',
				needsSpecificFollowup: false,
				specificFollowup: '',
				healthComments: '',
				accessPrivatePark: false,
				nature: '',
				isHomeless: false,
				requestLsDalo: false,
				dateRequestLsDalo: '',
			},
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
			<div className="container ">
				<h1>Bénéficiaire</h1>

				<div className="identification">
					<h4>Identification</h4>
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							Nom
							<form>
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
							<form>
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
							<form>
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

				{/* benevole referent */}
				<div className="benevole">
					<h4>Bénévole Référent et autres</h4>
					{/* <h2>{this.state.volunteer.firstName}</h2> */}
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							Bénevole
							<Volunteers />
						</div>
						<div className="col-xl-3">
							Permis de conduire
							<form>
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

						{/* <div className="col-3">
            <form>
              <label>
                <select id="inputState" class="form-control">
                  <option selected></option>
                  <option>A1</option>
                  <option>A2</option>
                  <option>B1</option>
                  <option>B2</option>
                  <option>C1</option>
                  <option>C2</option>
                </select>
                <p>Niveau de français</p>
              </label>
            </form>
          </div> */}
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3">
							Niveau de français (A1, A2, B1, B2, C1, C2)
							<form>
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
							<form>
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
							<form>
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
							<form>
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
							<form>
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
							<form>
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
							<form>
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
							<form>
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
							<form>
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
							<form>
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
							<form>
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
							<form>
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
							<form>
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
							<form>
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
							<label>
								<input
									className="form-control"
									type="text"
									name="incomeValue"
									onChange={this.handleChange}
								/>
							</label>
						</div>
						<div className="col-xl-3 ">
							CV + LDM
							<label>
								<input type="file" name="nom" />
							</label>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3 ">
							Commentaire
							<form>
								<textarea
									className="form-control"
									name="jobComments"
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
							<form>
								<label>
									<select
										id="inputState"
										name="hasCmu"
										className="form-control"
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
							{/* <form>
                  <label>
                    <input
                      type="text"
                      name="cmuStartDate"
                      onChange={this.handleChange}
                    />
                  </label>
                </form> */}
							<DatePicker
								selected={this.state.date}
								onChange={this.onChange}
								name="cmuStartDate"
							/>
						</div>
						<div className="col-xl-3 ">
							Date de fin
							{/* <form>
                  <label>
                    <input
                      type="text"
                      name="cmuEndDate"
                      onChange={this.handleChange}
                    />
                  </label>
                </form> */}
							<DatePicker
								selected={this.state.date}
								onChange={this.onChange}
								name="cmuEndDate"
							/>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-xl-3 ">
							Commentaire
							<form>
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
							<form>
								<label>
									<select
										id="inputState"
										className="form-control"
										name="accessPrivatePark"
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
							<form>
								<label>
									<select
										id="inputState"
										className="form-control"
										name="requestLsDalo"
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
							<form>
								<label>
									<select
										id="inputState"
										className="form-control"
										name="siao"
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
			</div>
		);
	}
}

export default Beneficiaires;
