import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/layouts/Login';
import Home from './components/layouts/Home';
import Contact from './components/layouts/Contact';
import PageBeneficiaires from './components/layouts/PageBeneficiaires';
import Hebergement from './components/layouts/Hebergement';
import RdvDeSuivi from './components/layouts/RdvDeSuivi';

class App extends React.Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Switch>
						<Route path='/' exact component={Login} />
						<Route path='/home' component={Home} />
						<Route
							path='/beneficiary'
							component={PageBeneficiaires}
						/>
						<Route path='/hebergement' component={Hebergement} />
						<Route path='/rdv' component={RdvDeSuivi} />
						<Route path='/contact' component={Contact} />
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
