import React from 'react';

function Select({ label, onChange, value, id, volunteers, interlocutorData }) {
	let select;

	if (label === 'Bénévole' && volunteers.length > 0) {
		const volunteersList = volunteers.map((volunteer) => {
			return (
				<option>
					{volunteer.lastName} {volunteer.firstName}
				</option>
			);
		});

		select = <React.Fragment>{volunteersList}</React.Fragment>;
	}
	if (label === 'Interlocuteur') {
		select = (
			<React.Fragment>
				<option>Bénéficiaire</option>
				<option>Hébergeur</option>
				<option>Contact</option>
			</React.Fragment>
		);
	}

	if (label === 'Nom et prénom' && interlocutorData.length > 0) {
		const interlocutorList = interlocutorData.map((interlocutor) => {
			console.log(interlocutor);
			return (
				<option value={interlocutor._id}>
					{interlocutor.lastName} {interlocutor.firstName}
				</option>
			);
		});
		select = <React.Fragment>{interlocutorList}</React.Fragment>;
	}

	if (label === "En recherche d'emploi?") {
		select = (
			<React.Fragment>
				<option>Oui</option>
				<option>Non</option>
			</React.Fragment>
		);
	}
	if (label === 'En Formation?') {
		select = (
			<React.Fragment>
				<option>Oui</option>
				<option>Non</option>
			</React.Fragment>
		);
	}

	console.log(value);

	return (
		<div className="form-group  mt-2">
			<label htmlFor="exampleFormControlSelect1">{label}</label>
			<select
				className="form-control"
				id="exampleFormControlSelect1"
				onChange={(e) => onChange(id, e.target.value)}
			>
				<option className="text-muted">select</option>
				{select}
			</select>
		</div>
	);
}

export default Select;
