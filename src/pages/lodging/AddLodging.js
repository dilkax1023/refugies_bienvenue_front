import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import AddLodgingContainer from '../../containers/AddLodgingContainer';

const AddLodging = () => {
	return (
		<div className="row" id="page-height">
			<div className="col-md-3 col-lg-2 navbar">
				<Navbar />
			</div>
			<div className="col-md-9 col-lg-10 main">
				<AddLodgingContainer />
			</div>
		</div>
	);
};

export default AddLodging;
