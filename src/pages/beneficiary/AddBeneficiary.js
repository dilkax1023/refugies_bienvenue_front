import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import AddBeneficiaryContainer from '../../containers/AddBeneficiaryContainer';

const AddBeneficiary = (props) => {
	return (
		<div className="my-3 mx-5">
			<div className="row">
				<div className="col-md-3 col-lg-2 navbar">
					<Navbar />
				</div>
				<div className="col-md-9 col-lg-10 main">
					<AddBeneficiaryContainer />
				</div>
			</div>
		</div>
	);
};

export default AddBeneficiary;
