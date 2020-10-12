import React from 'react';
import Form from '../UI/Form';
import Config from '../../utils/Config';
import classes from './AddRdv.module.css';

const urlBeneficiary = `${Config.protocol}${Config.host}/beneficiaries`;
const urlContact = `${Config.protocol}${Config.host}/contacts`;
const urlLodging = `${Config.protocol}${Config.host}/lodging`;
const urlVolunteer = `${Config.protocol}${Config.host}/volunteers`;
const urlMeeting = `${Config.protocol}${Config.host}/meeting`;

class AddRendezVous extends React.Component {
	state = {
		addRdvForm: {
			name: {
				value: '',
			},
			mail: {
				value: '',
			},
			date: {
				value: '',
			},
			phone: {
				value: '',
			},
			interlocutor: {
				value: '',
			},
			nameInter: {
				value: '',
			},
			mailInter: {
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
		interlocutorData: [],
		rdvDetails: {},
	};

	componentDidMount() {
		const rdvId = this.props.rdvId;
		const urlRdvDetails = urlMeeting + '/' + rdvId;
		console.log(urlRdvDetails);
		this.fetchData(urlRdvDetails);
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
				console.log('resDa', resData.data);
				if (url === urlVolunteer) {
					this.setState({ volunteers: resData.data });
				}
				if (url === '') {
					this.setState({
						rdvDetails: resData.data,
					});
				} else {
					this.setState({
						interlocutorData: resData.data,
					});
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
		if (value === 'Bénéficiaire' && input === 'interlocutor') {
			console.log(input, value);
			this.fetchData(urlBeneficiary);
		}
		if (value === 'Contact' && input === 'interlocutor') {
			this.fetchData(urlContact);
		}
		if (value === 'Hébergeur' && input === 'interlocutor') {
			this.fetchData(urlLodging);
		}
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
				mailVolunteer: authData.addRdvForm.mail.value,
				interlocutor: authData.addRdvForm.interlocutor.value,
				mailInterlocutor: authData.addRdvForm.mailInter.value,
				phoneInterlocutor: authData.addRdvForm.phone.value,
				date: authData.addRdvForm.date.value,
				platform: authData.addRdvForm.platform.value,
				trainingStatus: authData.addRdvForm.trainingStatus.value,
				jobSearchStatus: authData.addRdvForm.jobSearchStatus.value,
				attachements: authData.addRdvForm.attachements.value,
				commentaires: authData.addRdvForm.commentaires.value,
				summary: authData.addRdvForm.summary.value,
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
		const rdvDetails = [...this.state.rdvDetails];
		const interlocutorData = [...this.state.interlocutorData];

		return (
			<div className="container mt-5 w-100">
				<h3 className="text-center text-primary text-uppercase font-weight-bold">
					Ajouter un rendez-vous
				</h3>
				<Form
					volunteers={volunteers}
					interlocutorData={interlocutorData}
					onFormSubmit={this.onFormSubmit}
					authData={addRdvForm}
					rdvDetails={rdvDetails}
				/>
			</div>
		);
	}
}

export default AddRendezVous;
