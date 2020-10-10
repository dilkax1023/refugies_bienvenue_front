import { getByTestId } from '@testing-library/react';
import React from 'react';

function Select({ label, onChange, value, id, volunteers }) {
	let select = (
		<React.Fragment>
			<option className="text-muted">select</option>
		</React.Fragment>
	);

	if (label === 'Bénévole') {
		select = (
			<React.Fragment>
				<option className="text-danger">
					Aucun bénévole dans le list
				</option>
			</React.Fragment>
		);
	}

	if (label === 'Bénévole' && volunteers.length > 0) {
		const volunteersList = volunteers.map((volunteer, index) => {
			return (
				<React.Fragment>
					<option>
						{volunteer.lastName} {volunteer.firstName}
					</option>
				</React.Fragment>
			);
		});

		select = (
			<React.Fragment>
				<option className="text-muted">select un bénévole</option>
				{volunteersList}
			</React.Fragment>
		);
	}
	if (label === 'Interlocuteur') {
		select = (
			<React.Fragment>
				<option className="text-muted">select un interlocuteur</option>
				<option>Bénéficiaire</option>
				<option>Hébergeur</option>
				<option>Contact</option>
			</React.Fragment>
		);
	}

	if (label === "En recherche d'emploi?") {
		select = (
			<React.Fragment>
				<option className="text-muted">select</option>
				<option>Oui</option>
				<option>Non</option>
			</React.Fragment>
		);
	}
	if (label === 'En Formation?') {
		select = (
			<React.Fragment>
				<option className="text-muted">select</option>
				<option>Oui</option>
				<option>Non</option>
			</React.Fragment>
		);
	}

	return (
		<div className="form-group  mt-2">
			<label htmlFor="exampleFormControlSelect1">{label}</label>
			<select
				className="form-control"
				id="exampleFormControlSelect1"
				onChange={(e) => onChange(id, e.target.value)}
				value={value}
			>
				{select}
			</select>
		</div>
	);
}

export default Select;
