import React from 'react';
import Button from '../UI/Button';
import CardList from '../UI/CardList';

const Contacts = ({ contacts }) => {
	return contacts.map((contact) => (
		<CardList
			firstName={contact.lastName}
			lastName={contact.lastName}
			{...contact}
			key={contact._id}
		>
			<li className={'bg-light mt-1 pl-2 px-1 pt-2'}>
				<span>Téléphone : {contact.phone}</span>
			</li>
			{contact.mail && (
				<li className={'bg-light mt-1 pl-2 px-1 pt-2'}>
					<span>Mail : {contact.mail}</span>
				</li>
			)}
			{contact.organization && (
				<li className={'bg-light mt-1 pl-2 px-1 pt-2'}>
					<span>Organisation : {contact.organization}</span>
				</li>
			)}
			{contact.position && (
				<li className={'bg-light mt-1 pl-2 px-1 pt-2'}>
					<span>Position : {contact.position}</span>
				</li>
			)}
			<span className="float-right">
				<Button
					name="Voir la fiche"
					path={`/contacts/${contact._id}`}
				/>
			</span>
		</CardList>
	));
};

export default Contacts;
