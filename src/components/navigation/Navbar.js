import React from 'react';
import './Navbar.css';
import Button from '../UI/Button';

const Navbar = () => {
	return (
		<div className="d-flex flex-column align-items-center w-100">
			<h2 className="text-center mb-5">REFUGEES BIENVENUE</h2>
			<Button path="/" name="HOME" />
			<Button path="/beneficiary" name="BENEFICIAIRE" />
			<Button path="/beneficiarys" name="LISTES DES BENEFICIAIRES" />
			<Button path="/hebergement" name="HEBERGEMENT" />
			<Button path="/Hebergements" name="LISTES D'HEBERGEMENTS" />
			<Button path="/rdv" name="RDV DE SUIVI" />
			<Button path="/contacts" name="CONTACTS" />
			<Button path="/stats" name="STATISTIQUES" />
			<Button path="/bilan" name="BILAN" />
			<Button path="/admin" name="ADMIN" />
		</div>
	);
};

export default Navbar;
