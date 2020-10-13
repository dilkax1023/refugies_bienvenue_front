import React from 'react';
import Button from '../UI/Button';

const Navbar = () => {
	return (
		<div className="d-flex flex-column align-items-center w-100">
			<h2 className="text-center m-5">Refugees bienvenu</h2>
			<Button path="/" name="HOME" />
			<Button path="/beneficiary" name="BENEFICIAIRE" />
			<Button path="/lodging" name="HEBERGEMENT" />
			<Button path="/rdv" name="RDV DE SUIVI" />
			<Button path="/contacts" name="CONTACTS" />
			<Button path="/stats" name="STATISTIQUES" />
			<Button path="/bilan" name="BILANS" />
			<Button path="/admin" name="ADMIN" />
		</div>
	);
};

export default Navbar;
