import React from 'react';
import Card from './Card';
import Button from './Button';

const Table = ({ filteredList, title }) => {
	const getTableHead = (title) => {
		let tableHead;

		if (title === 'beneficiary') {
			tableHead = (
				<tr>
					<th scope="col">Nom</th>
					<th scope="col">Prénom</th>
					<th scope="col">Sexe</th>
					<th scope="col">Portable</th>
					<th scope="col">É-mail</th>
					<th scope="col">Date de naissance</th>
					<th scope="col" className="text-right">
						<Button
							path="/beneficiaires/add"
							name="Ajouter"
							styling="mt-1 px-3  btn btn-primary font-weight-bold"
						/>
					</th>
				</tr>
			);
		}
		if (title === 'lodging') {
			tableHead = (
				<tr>
					<th scope="col">Nom</th>
					<th scope="col">Prénom</th>
					<th scope="col">Age</th>
					<th scope="col">Portable</th>
					<th scope="col">É-mail</th>
					<th scope="col">AvailableFrom</th>
					<th scope="col">AvailableTo</th>
					<th scope="col" className="text-right">
						<Button
							path="/logding/add"
							name="Ajouter"
							styling="mt-1 px-3  btn btn-primary font-weight-bold"
						/>
					</th>
				</tr>
			);
		}

		if (title === 'contact') {
			tableHead = (
				<tr>
					<th scope="col">Nom</th>
					<th scope="col">Prénom</th>
					<th scope="col">Portable</th>
					<th scope="col">É-mail</th>
					<th scope="col">Organisme</th>
					<th scope="col">poste</th>
					<th scope="col" className="text-right">
						<Button
							path="/"
							name="Ajouter"
							styling="mt-1 px-3  btn btn-primary font-weight-bold"
						/>
					</th>
				</tr>
			);
		}

		if (title === 'meeting') {
			tableHead = (
				<tr>
					<th scope="col">Interlocutor</th>
					<th scope="col">Date</th>
					<th scope="col">Heure</th>
					<th scope="col">Platform</th>
					<th scope="col" className="text-right">
						<Button
							path="/rdv/add"
							name="Ajouter"
							styling="mt-1 px-3  btn btn-primary font-weight-bold"
						/>
					</th>
				</tr>
			);
		}

		return tableHead;
	};

	const getTableBody = (title, person) => {
		let tableBody;
		if (title === 'beneficiary') {
			tableBody = (
				<tr>
					<td>{person.lastName}</td>
					<td>{person.firstName}</td>
					<td>{person.gender}</td>
					<td>{person.phone}</td>
					<td>{person.mail}</td>
					<td>{person.birthDate.toString().slice(0, 10)}</td>
					<td className="text-right py-0">
						<Button
							path="/"
							name="Détail"
							styling="mt-1 px-3  btn btn-info"
						/>
					</td>
				</tr>
			);
		}
		if (title === 'lodging') {
			tableBody = (
				<tr>
					<td>{person.lastName}</td>
					<td>{person.firstName}</td>
					<td>{person.age}</td>
					<td>{person.phone}</td>
					<td>{person.mail}</td>
					<td>{person.availableFrom.toString().slice(0, 10)}</td>
					<td>{person.availableTo.toString().slice(0, 10)}</td>
					<td className="text-right py-0">
						<Button
							path="/"
							name="Détail"
							styling="mt-1 px-3  btn btn-info"
						/>
					</td>
				</tr>
			);
		}
		if (title === 'contact') {
			tableBody = (
				<tr>
					<td>{person.lastName}</td>
					<td>{person.firstName}</td>
					<td>{person.phone}</td>
					<td>{person.mail}</td>
					<td>{person.organisation}</td>
					<td>{person.position}</td>
					<td className="text-right py-0">
						<Button
							path="/"
							name="Détail"
							styling="mt-1 px-3  btn btn-info"
						/>
					</td>
				</tr>
			);
		}

		if (title === 'meeting') {
			if (person.date === null) {
				tableBody = <tr></tr>;
			} else {
				tableBody = (
					<tr>
						<td>{person.interlocutor}</td>
						<td>{person.date.toString().slice(0, 10)}</td>
						<td>{person.date.toString().slice(11, 19)}</td>
						<td>{person.platform}</td>
						<td className="text-right py-0">
							<Button
								path={`/rdv/${person._id}`}
								name="Détail"
								styling="mt-1 px-3  btn btn-info"
							/>
						</td>
					</tr>
				);
			}
		}
		return tableBody;
	};

	let filteredResult;
	// let contactList;
	// let beneList;
	// let meetingList;
	// let lodgingList;

	if (filteredList.length === 0) {
		filteredResult = (
			<div className="container my-2">
				<Card smallCard="small" content="Données ne sont pas trouvés" />
			</div>
		);
		return filteredList;
	} else {
		filteredResult = filteredList.map((person, index) => {
			return (
				<React.Fragment key={index}>
					{getTableBody(title, person)}
				</React.Fragment>
			);
		});
	}

	return (
		<div className="container my-2">
			<table className="table table-striped">
				<thead>{getTableHead(title)}</thead>
				<tbody>{filteredResult}</tbody>
			</table>
		</div>
	);
};

export default Table;
