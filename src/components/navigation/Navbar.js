import React from 'react';
import './Navbar.css';
import Button from '../UI/Button';

const Navbar = () => {
	return (
		<div className='d-flex flex-column align-items-center w-100'>
			<h2 className='text-center mb-5'>REFUGEES BIENVENU</h2>
			<Button exact path='/' name='HOME' />
			<Button path='/beneficiary' name='BÉNÉFICIAIRE' />
			<Button path='/hebergement' name='HÉBERGEMENT' />
			<Button path='/rdv' name='RDV DE SUIVI' />
			<Button path='/contact' name='CONTACT' />
			<Button path='/stats' name='STATISTIQUES' />
			<Button path='/bilan' name='BILAN' />
			<Button path='/admin' name='ADMIN' />
		</div>
	);
};

export default Navbar;
