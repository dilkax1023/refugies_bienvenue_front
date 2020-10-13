import React, { Component } from 'react';
import Config from '../../utils/Config';
import Navbar from '../navigation/Navbar';
const { host, protocol } = Config;

class AddBilan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			choseUseful: null,
			beneficiary: this.props.match.params.beneficiaryId,
		};

		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleSelectIsAssociation = this.handleSelectIsAssociation.bind(
			this
		);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		const { value } = evt.target;
		this.setState({
			[evt.target.name]: value,
		});
	}

	handleSelectIsAssociation(evt) {
		const { value } = evt.target;
		// console.log(value);

		const convertSelectBool = (value) => {
			if (typeof value === 'string') {
				if (value === 'true') {
					return true;
				}
				if (value === 'false') {
					return false;
				}
			}
			return value;
		};

		this.setState({
			choseUseful: convertSelectBool(value),
			[evt.target.name]: convertSelectBool(value),
		});
	}

	handleSelectChange(evt) {
		// console.log('event value', evt.target.value);
		const { value } = evt.target;
		console.log(value);

		const convertSelectBool = (value) => {
			if (typeof value === 'string') {
				if (value === 'true') {
					return true;
				}
				if (value === 'false') {
					return false;
				}
			}
			return value;
		};

		this.setState({
			[evt.target.name]: convertSelectBool(value),
		});
	}

	handleSubmit(event) {
		const { beneficiaryId } = this.props.match.params;
		const url = `${protocol}${host}/beneficiaries/${beneficiaryId}/reports`;

		fetch(url, {
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
		const { choseUseful } = this.state;
		console.log(this.state);

		return (
			<div className="container-fluid">
				<div className="row" id="page-height">
					<div className="col-md-3 col-lg-2 navbar">
						<Navbar />
					</div>
					<div className="col-md-9 col-lg-10 main">
						<h1>Nouveau bilan</h1>

						<form
							className="container-lg justify-content-center"
							onSubmit={this.handleSubmit}
						>
							<div className="form-group date">
								<label htmlFor="reportDate">
									Entrez la date du bilan
								</label>
								<input
									type="datetime-local"
									id="reportDate"
									name="date"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-group french-level">
								<h2 className="form-group-title">
									Niveau de français
								</h2>
								<div className="form-row justify-content-center align-items-baseline">
									<div className="col-4">
										<label htmlFor="arrivalFrenchLevel">
											À l'entrée RB
										</label>
										<select
											className="custom-select"
											name="arrivalFrenchLevel"
											id="arrivalFrenchLevel"
											onChange={this.handleChange}
										>
											<option defaultValue>
												Choisissez un niveau d'entrée
											</option>
											<option value="A1">A1</option>
											<option value="A2">A2</option>
											<option value="B1">B1</option>
											<option value="B2">B2</option>
											<option value="C1">C1</option>
											<option value="C2">C2</option>
										</select>
									</div>

									<div className="col-4">
										<label htmlFor="exitFrenchLevel">
											À la sortie RB
										</label>
										<select
											className="custom-select"
											name="exitFrenchLevel"
											id="exitFrenchLevel"
											onChange={this.handleChange}
										>
											<option defaultValue>
												Choisissez un niveau de sortie
											</option>
											<option value="A1">A1</option>
											<option value="A2">A2</option>
											<option value="B1">B1</option>
											<option value="B2">B2</option>
											<option value="C1">C1</option>
											<option value="C2">C2</option>
										</select>
									</div>
									<div className="col-4">
										<label htmlFor="perceivedAmeliorationFrenchLevel">
											Perçois-tu une amélioration en
											Français ?
										</label>
										<select
											className="custom-select"
											name="perceivedAmeliorationFrenchLevel"
											id="perceivedAmeliorationFrenchLevel"
											onChange={this.handleSelectChange}
										>
											<option defaultValue>
												Choisissez entre oui ou non
											</option>
											<option value={true}>Oui</option>
											<option value={false}>Non</option>
										</select>
									</div>
									<div className="col-6">
										<label htmlFor="commentsFrenchLevel">
											Commentaires
										</label>
										<textarea
											id="commentsFrenchLevel"
											name="commentsFrenchLevel"
											rows="4"
											onChange={this.handleChange}
										></textarea>
									</div>
								</div>
							</div>
							{/* /.frenchLevel */}

							<div className="form-group confidence-gain">
								<h2 className="form-group-title">
									Gain de confiance
								</h2>
								<div className="form-row justify-content-center">
									<div className="col-8">
										<label htmlFor="confidenceGain">
											Penses-tu avoir gagné en autonomie
											pendant le programme RB ? Te sens-tu
											plus à l’aise pour t'exprimer en
											français ? Te sens-tu capable
											d’entreprendre des démarches
											(professionnelles, administratives…)
											seul ?
										</label>
										<textarea
											id="confidenceGain"
											name="confidenceGain"
											rows="5"
											onChange={this.handleChange}
										></textarea>
									</div>
								</div>
							</div>
							{/* /.confidence-gain */}

							<div className="form-group autonomy-gain">
								<h2 className="form-group-title">
									Gain en autonomie
								</h2>
								<div className="form-row justify-content-center">
									<div className="col-5">
										<label htmlFor="isAssociationUseful">
											Le programme RB t'a-t-il permis
											d'entreprendre des démarches pour ta
											vie personnelle et/ou
											professionnelle (bénévolat,
											recherche d'emploi, activités...) ?
										</label>
										<select
											className="custom-select"
											name="isAssociationUseful"
											id="isAssociationUseful"
											onChange={
												this.handleSelectIsAssociation
											}
										>
											<option defaultValue>
												Choisissez entre oui ou non
											</option>
											<option value={true}>Oui</option>
											<option value={false}>Non</option>
										</select>
									</div>
									{choseUseful === true && (
										<div className="col-8">
											<div className="row align-items-baseline">
												<div className="col-6">
													<label htmlFor="commentsAssociation">
														Si oui, quels aspects du
														programme RB t'a permis
														d'entreprendre cela
														(stabilité du logement,
														accompagnement social,
														aide hébergeurs...) ?
													</label>
													<textarea
														id="commentsAssociation"
														name="commentsAssociation"
														rows="5"
														onChange={
															this.handleChange
														}
													></textarea>
												</div>
												<div className="col-6">
													<label htmlFor="takenSteps">
														Quelles démarches as-tu
														entreprises ?
													</label>
													<textarea
														id="takenSteps"
														name="takenSteps"
														rows="5"
														onChange={
															this.handleChange
														}
													></textarea>
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
							{/* /.autonomy-gain */}

							<div className="form-group history-with-rb">
								<h2 className="form-group-title">
									Histoire avec RB
								</h2>
								<div className="form-row justify-content-center">
									<div className="col-5">
										<label htmlFor="journeyFeedback">
											Peux-tu me raconter ton histoire et
											où et quand tu as rencontré RB ?
										</label>
										<textarea
											id="journeyFeedback"
											name="journeyFeedback"
											rows="5"
											onChange={this.handleChange}
										></textarea>
									</div>
								</div>
								<div className="form-row justify-content-center">
									<div className="col-5">
										<label htmlFor="associationFeedback">
											Peux-tu me raconter ton expérience
											avec RB ?
										</label>
										<textarea
											id="associationFeedback"
											name="associationFeedback"
											rows="5"
											onChange={this.handleChange}
										></textarea>
									</div>
								</div>
								<div className="form-row justify-content-center">
									<div className="col-5">
										<label htmlFor="peopleMetFeedback">
											Peux-tu me parler des gens que tu as
											rencontrés (hébergeurs, bénévoles,
											autres hébergés, autres membres de
											l'équipe) ? Les activités que vous
											avez faites ensemble ? Les
											évènements auxquels vous avez
											participé ?
										</label>
										<textarea
											id="peopleMetFeedback"
											name="peopleMetFeedback"
											rows="5"
											onChange={this.handleChange}
										></textarea>
									</div>
								</div>
							</div>
							{/* /.history-with-rb */}

							<div className="form-group future">
								<h2 className="form-group-title">Futur</h2>
								<div className="form-row justify-content-center">
									<div className="col-5">
										<label htmlFor="goals">
											Peux-tu me raconter ton histoire et
											où et quand tu as rencontré RB ?
										</label>
										<textarea
											id="goals"
											name="goals"
											rows="5"
											onChange={this.handleChange}
										></textarea>
									</div>
								</div>
							</div>

							<button type="submit" className="btn btn-primary">
								Ajouter le bilan
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default AddBilan;
