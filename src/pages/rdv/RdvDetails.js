import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import RdvDetailsMain from '../../components/mainSection/RdvDetailsMain';

const RdvDetails = (props) => {
	const rdvId = props.match.params.id;

	return (
		<div>
			<div className="row" id="page-height">
				<div className="col-md-3 col-lg-2 navbar">
					<Navbar />
				</div>
				<div className="col-md-9 col-lg-10 main">
					<RdvDetailsMain rdvId={rdvId} />
				</div>
			</div>
		</div>
	);
};

export default RdvDetails;
