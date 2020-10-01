import React from 'react';
import './Navbar.css';
import Button from '../core/Button';

const Navbar = () => {
	return (
		<div className='d-flex flex-column align-items-center w-100'>
			<h2 className='text-center mb-5'>Refugies Bienvenu</h2>
			<Button path='/beneficiere' name='Bénéficières' />
			<Button path='/hebergeur' name='hebergement' />
			<Button path='/rdvdesuivi' name='RDV DE SUIVI' />
			<Button path='/rdvdesuivi' name='Contact' />
			<Button path='/rdvdesuivi' name='Statistics' />
			<Button path='/rdvdesuivi' name='Bilan' />
			<Button path='/rdvdesuivi' name='Admin' />
		</div>
	);
};

export default Navbar;
