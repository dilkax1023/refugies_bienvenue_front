import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import StaticHebergement from '../../pages/statistiques/StaticHebergement';
import StaticSuivi from '../../pages/statistiques/StaticSuivi';
import StaticSortie from '../../pages/statistiques/StaticSortie';

const PageStatistique = (props) => {
	return (
		<div className="my-3 mx-5">
			<div className="row">
				<div className="col-md-3 col-lg-2 navbar">
					<Navbar />
				</div>
				<div className="col-md-9 col-lg-10 main">
					<StaticHebergement />
				</div>
				<div className="col-md-9 col-lg-10 main">
					<StaticSuivi />
				</div>
				<div className="col-md-9 col-lg-10 main">
					<StaticSortie />
				</div>
			</div>
		</div>
	);
};

export default PageStatistique;
