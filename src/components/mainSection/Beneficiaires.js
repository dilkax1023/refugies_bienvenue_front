import React from 'react';

class Beneficiaires extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: '' };

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

	render() {
		console.log(this.state);
		return (
			<div className="container">
				<h1>Bénéficiaires</h1>

				<h4>Identification</h4>
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-3">
							<label>
								<input
									type="text"
									name="lastName"
									onChange={this.handleChange}
								/>
								<p>Nom</p>
							</label>
						</div>
						<div className="col-3">
							<label>
								<input
									type="text"
									name="firstName"
									onChange={this.handleChange}
								/>
								<p>Prénom</p>
							</label>
						</div>
						<div className="col-3">
							<label>
								<input
									type="text"
									name="birthDate"
									onChange={this.handleChange}
								/>
								<p>Date de naissance</p>
							</label>
						</div>

						<div className="form-check form-check">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio1"
								value="option1"
							/>
							<label className="form-check-label" htmlFor="inlineRadio1">
								Garcon
							</label>
							<p>Sexe</p>
						</div>

						<div className="form-check form-check">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio2"
								value="option2"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								Fille
							</label>
						</div>
						<div className="form-check form-check">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio3"
								value="option3"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								Autre
							</label>
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							<label>
								<input type="text" name="phone" onChange={this.handleChange} />
								<p>Numéro de téléphone</p>
							</label>
						</div>
						<div className="col-3">
							<label>
								<input type="text" name="mail" onChange={this.handleChange} />
								<p>Email</p>
							</label>
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							<label>
								<input
									type="text"
									name="streetName"
									onChange={this.handleChange}
								/>
								<p>Adresse</p>
							</label>
						</div>
						<div className="col-3">
							<label>
								<input
									type="text"
									name="zipCode"
									onChange={this.handleChange}
								/>
								<p>Postal</p>
							</label>
						</div>
						<div className="col-3">
							<label>
								<input type="text" name="city" onChange={this.handleChange} />
								<p>Ville</p>
							</label>
						</div>
					</div>
					<h4>Bénévole Référent</h4>
					<div className="row">
						<div className="col-3">
							<label>
								<input
									type="text"
									name="volunteerMail"
									onChange={this.handleChange}
								/>
								<p>Mail du bénévole</p>
							</label>
						</div>
						<div className="col-3">
							<label>
								<input type="text" name="prenom" onChange={this.handleChange} />
								<p>Prénom</p>
							</label>
						</div>
					</div>
					{/* hebergeur */}
					<h4>Hébergeur</h4>
					<div className="row">
						<div className="col-3">
							<label>
								<input type="text" name="nom" />
								<p>Nom</p>
							</label>
						</div>
						<div className="col-3">
							<label>
								<input type="text" name="prenom" />
								<p>Prénom</p>
							</label>
						</div>
					</div>

					<div className="row">
						<div className="form-check form-check">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio1"
								value="option1"
							/>
							<label className="form-check-label" htmlFor="inlineRadio1">
								Oui
							</label>
							<p>Si pas hébergeur</p>
						</div>

						<div className="form-check form-check">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio2"
								value="option2"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								Non
							</label>
						</div>
						<div className="col-3">
							<label>
								<input type="text" name="nom" />
								<p>
									Si pas héberger: liste d’attente (depuis le jj/mm/aa) + à la
									rue ?
								</p>
							</label>
						</div>
					</div>
					{/*  */}
					<div className="row">
						<div className="form-check form-check">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio1"
								value="option1"
							/>
							<label className="form-check-label" htmlFor="inlineRadio1">
								Oui
							</label>
							<p>Fin de cohabitation</p>
						</div>

						<div className="form-check form-check">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio2"
								value="option2"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								Non
							</label>
						</div>
						<div className="col-3">
							<label>
								<input type="text" name="nom" />
								<p>Si oui quand: jj/mm/aa</p>
							</label>
						</div>
						<div className="row">
							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio1"
									value="option1"
								/>
								<label className="form-check-label" htmlFor="inlineRadio1">
									Oui
								</label>
								<p>Fin de suivi par RB?</p>
							</div>

							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio2"
									value="option2"
								/>
								<label className="form-check-label" htmlFor="inlineRadio2">
									Non
								</label>
							</div>
							<div className="col-3">
								<label>
									<input type="text" name="nom" />
									<p>Si oui quand: jj/mm/aa</p>
								</label>
							</div>
						</div>
					</div>
					{/* date arrive en france */}
					<div className="row">
						<div className="col-3">
							<label>
								<input
									type="text"
									name="dateArrivalFrance"
									onChange={this.handleChange}
								/>
								<p>Date d'arrivée en France</p>
							</label>
						</div>
						<div className="col-3">
							<label>
								<input
									type="text"
									name="dateArrivalAssociation"
									onChange={this.handleChange}
								/>
								<p>Date de prise en charge par l'association</p>
							</label>
						</div>
						<div className="col-3">
							<label>
								<input
									type="text"
									name="datePiObtaining"
									onChange={this.handleChange}
								/>
								<p>
									Date d’obtention de la PI ( Deux types de protections : Le
									statut de réfugié et la protection subsidiaire)
								</p>
							</label>
						</div>
					</div>
					<div className="row">
						<div className="col-3">
							<label>
								<input type="text" name="nom" />
								<p>Date du prochain RDV mensuel prévus: jj/mm/aa</p>
							</label>
						</div>
						<div className="col-3">
							<label>
								<input
									type="text"
									name="adgrefNumber"
									onChange={this.handleChange}
								/>
								<p>
									Numéro ADGREF C’est le numéro d’étranger de10 chiffres qui
									figure sur le titre de séjour
								</p>
							</label>
						</div>
						<div className="row">
							<p>Niveau de français:</p>
							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio1"
									value="option1"
								/>

								<label className="form-check-label" htmlFor="inlineRadio1">
									A1
								</label>
								{/* <p>Niveau de français</p> */}
							</div>

							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio2"
									value="option2"
								/>
								<label className="form-check-label" htmlFor="inlineRadio2">
									A2
								</label>
							</div>
							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio3"
									value="option3"
								/>
								<label className="form-check-label" htmlFor="inlineRadio3">
									B1
								</label>
							</div>
							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio4"
									value="option4"
								/>
								<label className="form-check-label" htmlFor="inlineRadio4">
									B2
								</label>
							</div>
							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio5"
									value="option5"
								/>
								<label className="form-check-label" htmlFor="inlineRadio4">
									C1
								</label>
							</div>
							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio6"
									value="option6"
								/>
								<label className="form-check-label" htmlFor="inlineRadio4">
									C2
								</label>
							</div>
						</div>
					</div>
					<textarea>Commentaires</textarea>
					{/* bancaire */}
					<div>
						<h4>Compte Bancaire</h4>
						<div className="row">
							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio1"
									value="option1"
								/>
								<label className="form-check-label" htmlFor="inlineRadio1">
									Oui
								</label>
								<p>Compte bancaire</p>
							</div>

							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio2"
									value="option2"
								/>
								<label className="form-check-label" htmlFor="inlineRadio2">
									Non
								</label>
							</div>
							<div className="col-3">
								<label>
									<input
										type="text"
										name="bankName"
										onChange={this.handleChange}
									/>
									<p>Si oui, quelle banque? </p>
								</label>
							</div>
							<div className="col-3">
								<label>
									<input
										type="text"
										name="drivingLicenceDate"
										onChange={this.handleChange}
									/>
									<p>Si oui, depuis quand: jj/mm/aa</p>
								</label>
							</div>
							<div className="row">
								<div className="form-check form-check">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label className="form-check-label" htmlFor="inlineRadio1">
										Oui
									</label>
									<p>Permis de conduire?</p>
								</div>

								<div className="form-check form-check">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio2"
										value="option2"
									/>
									<label className="form-check-label" htmlFor="inlineRadio2">
										Non
									</label>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="row">
							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="isDa"
									onChange={this.handleChange}
									id="inlineRadio1"
									value="option1"
								/>
								<label className="form-check-label" htmlFor="inlineRadio1">
									DA
								</label>
							</div>

							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="isCir"
									onChange={this.handleChange}
									id="inlineRadio2"
									value="option2"
								/>
								<label className="form-check-label" htmlFor="inlineRadio2">
									CIR
								</label>
							</div>
							<div className="col-3">
								<textarea name="cirDaStatus"></textarea>
								<p>Commentaire/état procédure: mises à jour </p>
							</div>
						</div>
					</div>
					{/* formations */}
					<div>
						<h4>Formation</h4>
						<div className="row">
							<div className="col-3">
								<label>
									<input type="text" name="nom" />
									<p>Formation ancienne</p>
								</label>
							</div>
							<div className="col-3">
								<label>
									<input
										type="text"
										name="currentTraining"
										onChange={this.handleChange}
									/>
									<p>Formation actuelle</p>
								</label>
							</div>
							<div className="col-3">
								<label>
									<input
										type="text"
										name="wishedTraining"
										onChange={this.handleChange}
									/>
									<p>Formation souahaité </p>
								</label>
							</div>
							<div className="col-3">
								<label>
									<input
										type="text"
										name="trainingAccessMode"
										onChange={this.handleChange}
									/>
									<p>Quel accès à la formation?</p>
								</label>
							</div>
						</div>
						<textarea name="trainingComments"></textarea>
						<p>Commentaire</p>
					</div>
					{/* travail */}
					<div>
						<h4>Profession</h4>
						<div className="row">
							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio1"
									value="option1"
								/>
								<label className="form-check-label" htmlFor="inlineRadio1">
									Oui
								</label>
								<p>Profession en cours?</p>
							</div>

							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio2"
									value="option2"
								/>
								<label className="form-check-label" htmlFor="inlineRadio2">
									Non
								</label>
							</div>
							<div className="col-3">
								<label>
									<input type="text" name="nom" />
									<p>Profession ancienne</p>
								</label>
							</div>
							<div className="col-3">
								<label>
									<input
										type="text"
										name="currentJob"
										onChange={this.handleChange}
									/>
									<p>Profession actuelle</p>
								</label>
							</div>
							<div className="col-3">
								<label>
									<input
										type="text"
										name="wishedJob"
										onChange={this.handleChange}
									/>
									<p>Profession souahaité </p>
								</label>
							</div>
						</div>
						<div className="row">
							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio1"
									value="option1"
								/>
								<label className="form-check-label" htmlFor="inlineRadio1">
									Oui
								</label>
								<p>Revenus?</p>
							</div>

							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio2"
									value="option2"
								/>
								<label className="form-check-label" htmlFor="inlineRadio2">
									Non
								</label>
							</div>
							<div className="col-3">
								<label>
									<input
										type="text"
										name="incomeValue"
										onChange={this.handleChange}
									/>
									<p>Montant mensuel</p>
								</label>
							</div>
							<div className="col-3">
								<label>
									<input type="file" name="nom" />
									<p>CV + LDM</p>
								</label>
							</div>
							<div className="col-3">
								<textarea></textarea>
								<p>Commentaire</p>
							</div>
						</div>
					</div>
					{/* santé */}
					<h4>Santé</h4>

					<div className="row">
						<div className="form-check form-check">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio1"
								value="option1"
							/>
							<label className="form-check-label" htmlFor="inlineRadio1">
								Oui
							</label>
							<p>CMU?</p>
						</div>

						<div className="form-check form-check">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio2"
								value="option2"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								Non
							</label>
						</div>

						{/*  */}
						<div className="col-3">
							<label>
								<input
									type="text"
									name="cmuStartDate"
									onChange={this.handleChange}
								/>
								<p>Si oui, date de début </p>
							</label>
						</div>
						<div className="col-3">
							<label>
								<input
									type="text"
									name="cmuEndDate"
									onChange={this.handleChange}
								/>
								<p>Date de fin </p>
							</label>
						</div>
						<div className="col-3">
							<textarea name="healthComments"></textarea>
							<p>Commentaire</p>
						</div>
					</div>
					{/* Logement */}
					<h4>Logement</h4>
					<div className="row">
						<div className="form-check form-check">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio1"
								value="option1"
							/>
							<label
								className="form-check-label"
								htmlFor="inli onChange={this.handleChange}neRadio1"
							>
								Oui
							</label>
							<p>Accès au parc privé?</p>
						</div>

						<div className="form-check form-check">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio2"
								value="option2"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								Non
							</label>
						</div>
					</div>
					<div className="row">
						<div className="form-check form-check">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio1"
								value="option1"
							/>
							<label className="form-check-label" htmlFor="inlineRadio1">
								Oui
							</label>
							<p>LS + DALO</p>
						</div>

						<div className="form-check form-check">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio2"
								value="option2"
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								Non
							</label>
						</div>
						<div className="col-3">
							<label>
								<input
									type="text"
									name="dateRequestLsDalo"
									onChange={this.handleChange}
								/>
								<p>Si oui, depuis quand: jj/mm/aa</p>
							</label>
						</div>
						<div className="row">
							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio1"
									value="option1"
								/>
								<label className="form-check-label" htmlFor="inlineRadio1">
									Oui
								</label>
								<p>SIAO</p>
							</div>

							<div className="form-check form-check">
								<input
									className="form-check-input"
									type="radio"
									name="inlineRadioOptions"
									id="inlineRadio2"
									value="option2"
								/>
								<label className="form-check-label" htmlFor="inlineRadio2">
									Non
								</label>
							</div>
							<div className="col-3">
								<textarea>
									<p>Commentaires</p>
								</textarea>
							</div>
						</div>
					</div>
					<input type="submit" value="Envoyer le formulaire"></input>
				</form>
			</div>
		);
	}
}
export default Beneficiaires;
