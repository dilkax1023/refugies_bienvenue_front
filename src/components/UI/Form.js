import React from 'react';
import FormGroup from '../UI/FormGroup';
import Select from './Select';
import TextArea from './TextArea';
import Config from '../../utils/Config';

const urlBeneficiary = `${Config.protocol}${Config.host}/beneficiaries`;
const urlContact = `${Config.protocol}${Config.host}/contacts`;
const urlLodging = `${Config.protocol}${Config.host}/lodging`;
const urlVolunteer = `${Config.protocol}${Config.host}/volunteers`;

class Form extends React.Component {
	state = {
		addRdvForm: {
			name: {
				value: '',
			},
			date: {
				value: '',
			},
			interlocutor: {
				value: '',
			},
			nameInter: {
				value: '',
			},
			hidden: {
				value: '',
			},

			platform: {
				value: '',
			},
			jobSearchStatus: {
				value: '',
			},
			trainingStatus: {
				value: '',
			},
			attachements: {
				value: '',
			},
			commentaires: {
				value: '',
			},
			summary: {
				value: '',
			},
		},
		volunteers: [],
		contacts: [],
		beneficiaries: [],
		lodgings: [],
	};

	componentDidMount() {
		this.fetchData(urlBeneficiary);
		this.fetchData(urlContact);
		this.fetchData(urlLodging);
		this.fetchData(urlVolunteer);
	}

	fetchData = (url) => {
		fetch(url)
			.then((res) => {
				if (res.status !== 200) {
					throw new Error('Failed to fetch user status.');
				}
				return res.json();
			})
			.then((resData) => {
				// console.log('resDa', resData.data);
				if (url === urlBeneficiary) {
					this.setState({ beneficiaires: resData.data });
				}
				if (url === urlContact) {
					this.setState({ contacts: resData.data });
				}
				if (url === urlLodging) {
					this.setState({ lodgings: resData.data });
				}
				if (url === urlVolunteer) {
					this.setState({ volunteers: resData.data });
				}
			})
			.catch((err) => console.log(err));
	};

	inputChangeHandler = (input, value) => {
		this.setState((prevState) => {
			const updatedForm = {
				...prevState.addRdvForm,
				[input]: {
					...prevState.addRdvForm[input],
					value: value,
				},
			};

			return {
				addRdvForm: updatedForm,
			};
		});
	};

	onFormSubmit = (event, authData) => {
		event.preventDefault();
		this.setState({ authLoading: true });
		fetch('http://localhost:3002/api/meetings', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				interlocutor: authData.addRdvForm.interlocutor.value,
				name: authData.addRdvForm.name.value,
				date: authData.addRdvForm.date.value,
				platform: authData.addRdvForm.platform.value,
				trainingStatus: authData.addRdvForm.trainingStatus.value,
				jobSearchStatus: authData.addRdvForm.jobSearchStatus.value,
				attachements: authData.addRdvForm.attachements.value,
				commentaires: authData.addRdvForm.commentaires.value,
				summary: authData.addRdvForm.summary.value,
				// volunteerId: this.state.volunteers.volunteerId,
			}),
		})
			.then((res) => {
				if (res.status === 422) {
					throw new Error(
						"Validation failed. Make sure the email address isn't used yet!"
					);
				}
				if (res.status !== 200 && res.status !== 201) {
					console.log('Error!');
					throw new Error('Creating a user failed!');
				}
				return res.json();
			})
			.then((resData) => {
				console.log(resData);
				// this.setState({
				// 	// 	SubmittedForm: true,
				// });
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					error: err,
				});
			});
	};

	render() {
		const addRdvForm = { ...this.state.addRdvForm };
		const volunteers = [...this.state.volunteers];
		return (
			<div>
				<form
					className="w-75 mx-auto"
					onSubmit={(e) => this.onFormSubmit(e, this.state)}
				>
					<div className="row">
						<div className="col">
							<Select
								id="name"
								label="Bénévole"
								onChange={this.inputChangeHandler}
								value={addRdvForm['name'].value}
								volunteers={volunteers}
							/>
						</div>
						<div className="col">
							<FormGroup
								id="date"
								date="Date"
								onChange={this.inputChangeHandler}
								value={addRdvForm['date'].value}
							/>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<Select
								id="interlocutor"
								label="Interlocuteur"
								onChange={this.inputChangeHandler}
								value={addRdvForm['interlocutor'].value}
							/>
						</div>
						<div className="col">
							<Select
								id="nameInter"
								label="Nom et prénom"
								onChange={this.inputChangeHandler}
								value={addRdvForm['nameInter'].value}
							/>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<FormGroup
								id="platform"
								label="Platform"
								onChange={this.inputChangeHandler}
								value={addRdvForm['platform'].value}
							/>
						</div>
						<div className="col">
							<Select
								id="jobSearchStatus:"
								label="En recherche d'emploi?"
								onChange={this.inputChangeHandler}
								value={addRdvForm['jobSearchStatus'].value}
							/>
						</div>
						<div className="col">
							<Select
								id="trainingStatus"
								label="En Formation?"
								onChange={this.inputChangeHandler}
								value={addRdvForm['trainingStatus'].value}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<TextArea
								id="attachements"
								label="Attachements"
								onChange={this.inputChangeHandler}
								value={addRdvForm['attachements'].value}
							/>
						</div>
						<div className="col">
							<TextArea
								id="commentaires"
								label="Commentaires"
								onChange={this.inputChangeHandler}
								value={addRdvForm['commentaires'].value}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<TextArea
								id="summary"
								label="Summary"
								onChange={this.inputChangeHandler}
								value={addRdvForm['summary'].value}
							/>
						</div>
					</div>
					<div className=" w-100 text-center">
						<button
							type="submit"
							className="btn btn-primary w-25 my-4  mx-auto"
						>
							Enregistrer
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Form;