import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Table from '../../components/UI/Table';

const Bilans = ({ bilans }) => {
	return (
		<div className="container-fluid">
			<div className="row" id="page-height">
				<div className="col-md-3 col-lg-2 navbar">
					<Navbar />
				</div>
				<div className="col-md-9 col-lg-10 main">
					<h1>Derniers bilans</h1>
					<Table filteredList={bilans} title="bilans" />
				</div>
			</div>
		</div>
	);
};

export default Bilans;
