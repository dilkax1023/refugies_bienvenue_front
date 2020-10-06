import React from 'react';
import Card from '../UI/Card';
import SeachBar from '../searchbar/SearchBar';

class HomeMain extends React.Component {
	state = {
		term: '',
		beneficiairesData: [],
	};

	componentDidMount() {
		// this.setState({ authLoading: true });
		fetch('http://localhost:3002/api/beneficiaries')
			.then(res => {
				if (res.status !== 200) {
					throw new Error('Failed to fetch user status.');
				}
				return res.json();
			})
			.then(resData => {
				console.log('resData', resData);
				this.setState({ beneficiairesData: resData.data });
			})
			.catch(err => console.log(err));
	}

	onInputChange = term => {
		this.setState({ term: term });
	};

	onClickSearch = e => {
		e.preventDefault();
		console.log(this.state.term);
	};

	render() {
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
									content='25%'
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
