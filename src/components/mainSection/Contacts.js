import React from 'react';
import Button from '../UI/Button';
import CardList from '../UI/CardList';

const Contacts = ({ contacts }) => {
	console.log(contacts);
	return contacts.map((contact) => (
		<CardList
			firstName={contact.lastName}
			lastName={contact.lastName}
			{...contact}
			key={contact._id}
			smallCard={true}
		>
			<span>Téléphone : {contact.phone}</span>
			<span className="float-right">
				<Button
					name="Voir la fiche"
					path={`/contacts/${contact._id}`}
					smallCard="small"
				/>
			</span>
		</CardList>
	));
};

export default Contacts;
