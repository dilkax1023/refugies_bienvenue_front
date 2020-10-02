import React from 'react';
import Navbar from './Navbar';
import Main from './Main';

const Home = props => {
	return (
		<div className='my-3 mx-5'>
			<div className='row'>
				<div className='col-md-3 col-lg-2 navbar'>
					<Navbar />
				</div>
				<div className='col-md-9 col-lg-10 main'>
					<Main />
				</div>
			</div>
		</div>
	);
};

export default Home;
