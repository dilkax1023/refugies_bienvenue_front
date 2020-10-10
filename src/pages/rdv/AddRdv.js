import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import AddRendezVous from '../../components/mainSection/AddRendezVous';

const AddRdv = () => {
	return (
		<div>
			<div className="row" id="page-height">
				<div className="col-md-3 col-lg-2 navbar">
					<Navbar />
				</div>
				<div className="col-md-9 col-lg-10 main">
					<AddRendezVous />
				</div>
			</div>
		</div>
	);
};

export default AddRdv;
