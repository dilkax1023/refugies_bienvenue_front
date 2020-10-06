import React, { Component } from 'react';
import Navbar from '../../components/navigation/Navbar';
import HomeMain from '../../components/mainSection/HomeMain';

class Home extends Component {
	state = {
		term: '',
	};

	render() {
		return (
			<div className='my-3 mx-5'>
				<div className='row'>
					<div className='col-md-3 col-lg-2 navbar'>
						<Navbar />
					</div>
					<div className='col-md-9 col-lg-10 main'>
						<HomeMain onLogout={this.props.onLogout} />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
