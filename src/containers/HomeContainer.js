import React from 'react';
import Card from '../components/UI/Card';
import SearchBar from '../components/UI/SearchBar';
import Table from '../components/UI/Table';
import Config from '../utils/Config';
import CardSearchResult from '../components/UI/CardSearchResult';

const urlBeneficiary = `${Config.protocol}${Config.host}/beneficiaries`;
const urlContact = `${Config.protocol}${Config.host}/contacts`;
const urlLodging = `${Config.protocol}${Config.host}/lodging`;
const urlVolunteer = `${Config.protocol}${Config.host}/volunteers`;
const urlMeetings = `${Config.protocol}${Config.host}/meetings`;

class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			beneficiairesData: [],
			contacts: [],
			lodgings: [],
			volunteers: [],
			meetings: [],
			nbrDePersonneEnFormation: null,
			filteredListBene: [],
			filteredListCon: [],
			filteredListVol: [],
			filteredListLod: [],
			filteredListMeet: [],
		};
	}

	componentDidMount() {
		this.fetchData(urlBeneficiary);
		this.fetchData(urlContact);
		this.fetchData(urlLodging);
		this.fetchData(urlVolunteer);
		this.fetchData(urlMeetings);
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
				if (url === urlBeneficiary) {
					this.setState({ beneficiairesData: resData.data });
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
				if (url === urlMeetings) {
					this.setState({ meetings: resData.data });
				}
			})
			.catch((err) => console.log(err));
	};

	onInputChange = (term) => {
		const sTerm = term.toString().toLowerCase();
		this.setState({ term: sTerm });
	};

	onClickSearch = (e) => {
		e.preventDefault();
		let searchTerm = this.state.term;
		if (searchTerm === '') {
			return;
		}

		const allbeneficiaires = [...this.state.beneficiairesData];
		const allContacts = [...this.state.contacts];
		const allLodgings = [...this.state.lodgings];
		const allVolunteers = [...this.state.volunteers];
		const allMeetings = [...this.state.meetings];

		this.getFilteredList(allbeneficiaires, searchTerm, 'beneficiary');
		this.getFilteredList(allContacts, searchTerm, 'contact');
		this.getFilteredList(allLodgings, searchTerm, 'lodging');
		this.getFilteredList(allVolunteers, searchTerm, 'volunteer');
		this.getFilteredList(allMeetings, searchTerm, 'meeting');
	};

	getFilteredList = (arr, term, comefrom) => {
		const filteredList = arr.filter((el) => {
			const myArray = Object.values(el);
			const loweredArray = myArray.join('/').toLowerCase().split('/');
			return loweredArray.indexOf(term) !== -1;
		});

		// if (filteredList === []) {
		// }

		if (comefrom === 'contact') {
			this.setState({ filteredListCon: filteredList });
		}
		if (comefrom === 'beneficiary') {
			this.setState({ filteredListBene: filteredList });
		}
		if (comefrom === 'lodging') {
			this.setState({ filteredListLod: filteredList });
		}
		if (comefrom === 'volunteer') {
			this.setState({ filteredListVol: filteredList });
		}
		if (comefrom === 'meeting') {
			this.setState({ filteredListMeet: filteredList });
		}
	};

	render() {
		let personneEnFormation;
		const beneficiaires = [...this.state.beneficiairesData];
		if (beneficiaires.length > 0) {
			personneEnFormation = beneficiaires.filter(
				(person) => person.followsCourse === true
			).length;
		}

		// console.log('lodgings', this.state.lodgings);
		// console.log('meetings', this.state.meetings);
		// console.log('volunteer', this.state.volunteers);

		const {
			filteredListBene,
			filteredListCon,
			filteredListLod,
			filteredListVol,
			filteredListMeet,
		} = this.state;

		let table = <CardSearchResult />;

		if (filteredListBene.length > 0) {
			table = (
				<Table title="beneficiary" filteredList={filteredListBene} />
			);
		}
		if (filteredListLod.length > 0) {
			table = <Table title="lodging" filteredList={filteredListLod} />;
		}
		if (filteredListCon.length > 0) {
			table = <Table title="contact" filteredList={filteredListCon} />;
		}
		if (filteredListVol.length > 0) {
			table = <Table title="volunteer" filteredList={filteredListVol} />;
		}
		if (filteredListMeet.length > 0) {
			table = <Table title="meeting" filteredList={filteredListMeet} />;
		}

		return (
			<React.Fragment>
				<div className="row">
					<div className="col-lg-4">
						<Card title="RDV à venir" />
					</div>
					<div className="col-lg-5">
						<div className="row">
							<div className="col-6">
								<Card
									title="Personnes en formation"
									smallCard="small"
									content={personneEnFormation}
								/>
							</div>
							<div className="col-6">
								<Card
									title="Personnes en travail"
									smallCard="small"
									content="25%"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-6">
								<Card
									title="Nbr de personnes accueillies"
									smallCard="small"
									content="25%"
								/>
							</div>
							<div className="col-6">
								<Card
									title="Hébergements disponibles"
									smallCard="small"
									content="25%"
								/>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<Card title="Profil" onLogout={this.props.onLogout} />
					</div>
				</div>
				<SearchBar
					onClickSearch={this.onClickSearch}
					onInputChange={this.onInputChange}
					value={this.state.term}
				/>
				<div className="row p-0 m-0 w-100">{table}</div>
			</React.Fragment>
		);
	}
}

export default HomeContainer;
