import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from './pages/home/Home';
import ContactController from './pages/contact/ContactController';
// import Hebergement from './pages/hebergement/Hebergement';
import RdvDeSuivi from './pages/rdv/RdvDeSuivi';
import AddRdv from './pages/rdv/AddRdv';
import RdvDetails from './pages/rdv/RdvDetails';
import HebergementsPage from './pages/hebergement/HebergementsPage';
import BeneficiairesPage from './pages/beneficiaires/BeneficiairesPage';
import Beneficiary from './components/mainSection/Beneficiary';
import Statistique from './pages/statistiques/PageStatistique';

class App extends React.Component {
	state = {
		isAuth: false,
		token: null,
		userId: null,
		authLoading: false,
		error: null,
		Submitted: false,
	};

	componentDidMount() {
		const token = localStorage.getItem('token');
		if (!token) {
			return;
		}

		const userId = localStorage.getItem('userId');
		this.setState({ isAuth: true, token: token, userId: userId });
	}

	logoutHandler = () => {
		this.setState({ isAuth: false, token: null });
		localStorage.removeItem('token');
		localStorage.removeItem('expiryDate');
		localStorage.removeItem('userId');
	};

	signupHandler = (event, authData) => {
		event.preventDefault();
		this.setState({ authLoading: true });
		fetch('http://localhost:3002/api/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				mail: authData.signupForm.mail.value,
				password: authData.signupForm.password.value,
				passwordConfirmation:
					authData.signupForm.passwordConfirmation.value,
				lastName: authData.signupForm.lastName.value,
				firstName: authData.signupForm.firstName.value,
				phone: authData.signupForm.phone.value,
			}),
		})
			.then((res) => {
				if (res.status === 422) {
					throw new Error(
						"Validation failed. Make sure the email address isn't used yet!"
					);
				}
				if (res.status !== 200 && res.status !== 201) {
					console.log('Error!');
					throw new Error('Creating a user failed!');
				}
				return res.json();
			})
			.then((resData) => {
				console.log(resData);
				this.setState({
					isAuth: false,
					authLoading: false,
					Submitted: true,
				});
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					isAuth: false,
					authLoading: false,
					error: err,
				});
			});
	};

	loginHandler = (event, authData) => {
		event.preventDefault();
		this.setState({ authLoading: true });
		fetch('http://localhost:3002/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				mail: authData.mail,
				password: authData.password,
			}),
		})
			.then((res) => {
				if (res.status === 422) {
					throw new Error('Validation failed.');
				}
				if (res.status !== 200 && res.status !== 201) {
					console.log('Error!');
					throw new Error('Could not authenticate you!');
				}
				return res.json();
			})
			.then((res) => {
				console.log('this is from App.js', res);
				this.setState({
					isAuth: true,
					token: res.data.token,
					authLoading: false,
					userId: res.data._id,
					Submitted: false,
				});
				localStorage.setItem('token', res.data.token);
				localStorage.setItem('userId', res.data._id);
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					isAuth: false,
					authLoading: false,
					error: err,
				});
			});
	};

	render() {
		let redirect = null;
		if (this.state.Submitted) {
			redirect = <Redirect to="/" />;
		}

		let routes = (
			<Switch>
				<Route
					path="/"
					exact
					render={(props) => (
						<Login
							{...props}
							onLogin={this.loginHandler}
							loading={this.state.authLoading}
						/>
					)}
				/>
				<Route
					path="/signup"
					render={(props) => (
						<Signup
							{...props}
							onSignup={this.signupHandler}
							loading={this.state.authLoading}
						/>
					)}
				/>
			</Switch>
		);
		if (this.state.isAuth) {
			routes = (
				<Switch>
					<Route
						path="/"
						exact
						render={(props) => (
							<Home {...props} onLogout={this.logoutHandler} />
						)}
					/>
					<Route path="/beneficiary" component={BeneficiairesPage} />
					<Route
						path="/beneficiaires"
						exact
						component={BeneficiairesPage}
					/>
					<Route path="/beneficiaires/add" component={Beneficiary} />
					<Route path="/hebergement" component={HebergementsPage} />
					<Route path="/hebergements" component={HebergementsPage} />
					<Route path="/rdv" exact component={RdvDeSuivi} />
					<Route path="/rdv/add" exact component={AddRdv} />
					<Route path="/rdv/:id" component={RdvDetails} />
					<Route path="/contacts" component={ContactController} />
					<Route path="/stats" component={Statistique} />
				</Switch>
			);
		}

		return (
			<React.Fragment>
				{redirect}
				{routes}
			</React.Fragment>
		);
	}
}

export default App;
