import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Hebergement from '../../components/mainSection/Hebergement';

const PageHebergement = (props) => {
	return (
		<div className="my-3 mx-5">
			<div className="row">
				<div className="col-md-3 col-lg-2 navbar">
					<Navbar />
				</div>
				<div className="col-md-9 col-lg-10 main">
					<Hebergement title="HEBERGEMENT" />
					<button className="btn btn-outline-success">
						{/* to add onClick={addhebergement} */}
						Ajouter un hébergement
					</button>
				</div>
			</div>
		</div>
	);
};

export default PageHebergement;
