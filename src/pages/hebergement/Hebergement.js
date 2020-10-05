import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Card from '../../components/UI/Card';

const Hebergement = props => {
	return (
		<div className='my-3 mx-5'>
			<div className='row'>
				<div className='col-md-3 col-lg-2 navbar'>
					<Navbar />
				</div>
				<div className='col-md-9 col-lg-10 main'>
					<Card title='Hébergement' />
				</div>
			</div>
		</div>
	);
};

export default Hebergement;
