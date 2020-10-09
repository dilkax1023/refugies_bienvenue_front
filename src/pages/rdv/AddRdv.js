import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import AddRdv from './AddRdv';

const AddRdv = () => {
	return (
		<div>
			<div className="row" id="page-height">
				<div className="col-md-3 col-lg-2 navbar">
					<Navbar />
				</div>
				<div className="col-md-9 col-lg-10 main">
					<AddRdv />
				</div>
			</div>
		</div>
	);
};

export default AddRdv;
