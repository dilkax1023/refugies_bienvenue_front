import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/layouts/Login';
import Home from './components/layouts/Home';

class App extends React.Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Switch>
						<Route path='/' exact component={Login} />
						<Route path='/home' component={Home} />
						{/* <Route path='/' component={Popular} />
						<Route path='/popular-battle' component={PopularBattle} />
						<Route path='/my-list' exact component={MyList} />
						<Route path='/my-list/:id' component={MovieDetails} /> */}
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
