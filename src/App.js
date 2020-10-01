import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/layouts/Login';
import Navbar from './components/layouts/Navbar';
import Main from './components/layouts/Main';

class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<React.Fragment>
				{/* <Login /> */}
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
			</React.Fragment>
		);
	}
}

export default App;
