import React from 'react';
import Card from '../UI/Card';
import SearchBar from '../UI/SearchBar';
import Table from '../UI/Table';
import Config from '../../utils/Config';

const urlBeneficiary = `${Config.protocol}${Config.host}/beneficiaries`;
const urlContact = `${Config.protocol}${Config.host}/contacts`;

class HomeMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			beneficiairesData: [],
			nbrDePersonneEnFormation: null,
			contacts: [],
			filteredListBene: [],
			filteredListCon: [],
		};
	}

	componentDidMount() {
		this.fetchData(urlBeneficiary);
		this.fetchData(urlContact);
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
					this.setState({ beneficiairesData: resData.data });
				}
				if (url === urlContact) {
					this.setState({ contacts: resData.data });
				}
			})
			.catch((err) => console.log(err));
	};

	onInputChange = (term) => {
		const sTerm = term.toLowerCase();
		this.setState({ term: sTerm });
	};

	onClickSearch = async (e) => {
		e.preventDefault();
		this.setState({ term: '' });

		const searchTerm = this.state.term;
		const allbeneficiaires = [...this.state.beneficiairesData];
		const allContacts = [...this.state.contacts];

		this.getFilteredList(allbeneficiaires, searchTerm, 'beneficiary');
		this.getFilteredList(allContacts, searchTerm, 'contact');
	};

	getFilteredList = (arr, term, comefrom) => {
		const filteredList = arr.filter((el) => {
			const myArray = Object.values(el);
			const loweredArray = myArray.join('/').toLowerCase().split('/');
			return loweredArray.indexOf(term) !== -1;
		});

		if (comefrom === 'contact') {
			this.setState({ filteredListCon: filteredList });
		}
		if (comefrom === 'beneficiary') {
			this.setState({ filteredListBene: filteredList });
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
									title="Nbr de personnes acceuilleé"
									smallCard="small"
									content="25%"
								/>
							</div>
							<div className="col-6">
								<Card
									title="Nbr d’hébergement disponible"
									smallCard="small"
									content="25%"
								/>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<Card title="Profile" onLogout={this.props.onLogout} />
					</div>
				</div>
				<SearchBar
					onClickSearch={this.onClickSearch}
					onInputChange={this.onInputChange}
				/>
				<div className="row ">
					{this.state.filteredListCon.length > 0 ? (
						<Table
							title="contacts"
							filteredList={this.state.filteredListCon}
						/>
					) : (
						<Table
							title="beneficiaires"
							filteredList={this.state.filteredListBene}
						/>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default HomeMain;
