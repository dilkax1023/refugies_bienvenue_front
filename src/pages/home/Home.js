import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import HomeMain from '../../components/mainSection/HomeMain';

const Home = ({ onLogout }) => {
	return (
		<div>
			<div className="row" id="page-height">
				<div className="col-md-3 col-lg-2 navbar">
					<Navbar />
				</div>
				<div className="col-md-9 col-lg-10 main">
					<HomeMain onLogout={onLogout} />
				</div>
			</div>
		</div>
	);
};

export default Home;
