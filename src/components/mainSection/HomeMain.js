import React from 'react';
import Card from '../UI/Card';

const HomeMain = () => {
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
					<Card title='Profile' />
				</div>
			</div>
			<div className='row search-bar mx-2 mt-3 '>
				<div className='col-lg-3 col-md-6'>
					<p className='py-2 mb-0'>Jeu. 18 Oct 2020</p>
				</div>
				<div className='col-lg-6 col-md-6'>
					<form className='w-100 h-100'>
						<div className='form-row align-items-center w-100 h-100 justify-content-center'>
							<div className='col-auto w-75'>
								<input
									type='text'
									className='form-control'
									placeholder='Search'
								/>
							</div>
							<div className='col-auto'>
								<button
									type='submit'
									className='btn btn-success'>
									Search
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className='col-lg-3 col-md-6'>
					<p className='py-2 mb-0 text-right'>10:34:11</p>
				</div>
			</div>
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
