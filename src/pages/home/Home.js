import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import HomeMain from '../../components/mainSection/HomeMain';

const Home = props => {
	return (
		<div className='my-3 mx-5'>
			<div className='row'>
				<div className='col-md-3 col-lg-2 navbar'>
					<Navbar />
				</div>
				<div className='col-md-9 col-lg-10 main'>
					<HomeMain onLogout={props.onLogout} />
				</div>
			</div>
		</div>
	);
};

export default Home;
