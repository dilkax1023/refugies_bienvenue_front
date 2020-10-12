import React from 'react';
import Form from '../UI/Form';

function RdvDetailsMain(props) {
	return (
		<div className="container mt-5 w-100">
			<h3 className="text-center text-primary text-uppercase font-weight-bold">
				Ajouter un rendez-vous
			</h3>
			<Form rdvId={props.rdvId} />
		</div>
	);
}

export default RdvDetailsMain;
