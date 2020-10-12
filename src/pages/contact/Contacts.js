import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Table from '../../components/UI/Table';

const Contacts = ({ contacts }) => {
	return (
		<div className="row" id="page-height">
			<div className="col-md-3 col-lg-2 navbar">
				<Navbar />
			</div>
			<div className="col-md-9 col-lg-10 main">
				<Table filteredList={contacts} title="contact" />
			</div>
		</div>
	);
};

export default Contacts;
