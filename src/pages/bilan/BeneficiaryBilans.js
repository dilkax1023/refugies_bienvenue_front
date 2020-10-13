import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Table from '../../components/UI/Table';

const BeneficiaryBilans = ({ bilans }) => {
	return (
		<div className="container-fluid">
			<div className="row" id="page-height">
				<div className="col-md-3 col-lg-2 navbar">
					<Navbar />
				</div>
				{bilans.length > 0 && (
					<div className="col-md-9 col-lg-10 main">
						<h1>
							{bilans[0].beneficiary.firstName}{' '}
							{bilans[0].beneficiary.lastName} - Derniers bilans
						</h1>
						<Table
							filteredList={bilans}
							title="BeneficiaryBilans"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default BeneficiaryBilans;
