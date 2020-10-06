import React from 'react';
import Card from '../UI/Card';
import SeachBar from '../searchbar/SearchBar';

const HomeMain = props => {
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
					<Card title='Profile' onLogout={props.onLogout} />
				</div>
			</div>
			<SeachBar />
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
};

export default HomeMain;
