import React from 'react';
import Card from '../UI/Card';

function Table({ filteredList }) {
	console.log('contacts', filteredList);
	let filteredResult;
	if (filteredList.length === 0) {
		filteredResult = (
			<div className='container my-2'>
				<Card
					content='Vous pouvez faire une recherche par nom ou prenom'
					smallCard='small'
				/>
			</div>
		);
		return filteredResult;
	}
	filteredResult = filteredList.map(person => (
		<React.Fragment>
			<tbody>
				<tr>
					<td>{person.firstName}</td>
					<td>{person.lastName}</td>
					<td>{person.phone}</td>
					<td>{person.mail}</td>
					<td>{person.organisation}</td>
					<th scope='row'>{person.position}</th>
				</tr>
			</tbody>
		</React.Fragment>
	));
	return (
		<div className='container my-2'>
			<table className='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>First Name</th>
						<th scope='col'>Last Name</th>
						<th scope='col'>Phone</th>
						<th scope='col'>Mail</th>
						<th scope='col'>Organisation</th>
						<th scope='col'>Position</th>
					</tr>
				</thead>
				{filteredResult}
			</table>
		</div>
	);
}

export default Table;
