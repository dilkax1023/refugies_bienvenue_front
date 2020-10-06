import React from 'react';
import Card from '../UI/Card';
import SeachBar from '../searchbar/SearchBar';

class HomeMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			beneficiairesData: [],
			nbrDePersonneEnFormation: null,
			meetings: [],
		};
	}

	componentDidMount() {
		// this.setState({ authLoading: true });
		this.fetchData('http://localhost:3002/api/beneficiaries');
		this.fetchData('http://localhost:3002/api/meetings');
	}

	fetchData = url => {
		fetch(url)
			.then(res => {
				if (res.status !== 200) {
					throw new Error('Failed to fetch user status.');
				}
				return res.json();
			})
			.then(resData => {
				console.log('resDa', resData.data);
				if (url === 'http://localhost:3002/api/beneficiaries') {
					this.setState({ beneficiairesData: resData.data });
				}
				if (url === 'http://localhost:3002/api/meetings') {
					this.setState({ meetings: resData.data });
				}
			})
			.catch(err => console.log(err));
	};

	onInputChange = term => {
		this.setState({ term: term });
	};

	onClickSearch = e => {
		e.preventDefault();
	};

	render() {
		console.log(this.state.meetings);

		let personneEnFormation;
		const beneficiaires = [...this.state.beneficiairesData];
		if (beneficiaires.length > 0) {
			personneEnFormation = beneficiaires.filter(
				person => person.followsCourse === true
			).length;
		}

		return (
			<React.Fragment>
				<div className='row'>
					<div className='col-lg-4'>
						<Card title='RDV à venir' />
					</div>
					<div className='col-lg-5'>
						<div className='row'>
							<div className='col-6'>
								<Card
									title='Personnes en formation'
									smallCard='small'
									content={personneEnFormation}
								/>
							</div>
							<div className='col-6'>
								<Card
									title='Personnes en travail'
									smallCard='small'
									content='25%'
								/>
							</div>
						</div>
						<div className='row'>
							<div className='col-6'>
								<Card
									title='Nbr de personnes acceuilleé'
									smallCard='small'
									content='25%'
								/>
							</div>
							<div className='col-6'>
								<Card
									title='Nbr d’hébergement disponible'
									smallCard='small'
									content='25%'
								/>
							</div>
						</div>
					</div>
					<div className='col-lg-3'>
						<Card title='Profile' onLogout={this.props.onLogout} />
					</div>
				</div>
				<SeachBar
					onClickSearch={this.onClickSearch}
					onInputChange={this.onInputChange}
				/>
				<div className='row'>
					<div className='col-lg-5 col-md-6'>
						<Card title='Alertes' />
					</div>
					<div className='col-lg-7 col-md-6'>
						<Card title='Todo' />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default HomeMain;
