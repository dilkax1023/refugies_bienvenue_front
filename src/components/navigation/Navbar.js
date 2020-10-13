import React from 'react';
import Button from '../UI/Button';

const Navbar = () => {
	return (
		<div className="d-flex flex-column align-items-center w-100">
			<h2 className="text-center m-5">Refugiés bienvenue</h2>
			<Button path="/" name="ACCUEIL" />
			<Button path="/beneficiaires" name="BENEFICIAIRES" />
			<Button path="/lodging" name="HEBERGEMENTS" />
			<Button path="/rdv" name="RDV DE SUIVI" />
			<Button path="/contacts" name="CONTACTS" />
			<Button path="/stats" name="STATISTIQUES" />
			<Button path="/bilans" name="BILANS" />
			<Button path="/benevoles" name="BENEVOLES" />
		</div>
	);
};

export default Navbar;
