import React from 'react';
import illustration from '../../img/Humaaans.png';
import FormGroup from '../../components/UI/FormGroup';
import { NavLink } from 'react-router-dom';

class Login extends React.Component {
	state = {
		loginForm: {
			email: {
				value: '',
			},
			password: {
				value: '',
			},
		},
	};

	inputChangeHandler = (input, value) => {
		this.setState((prevState) => {
			const updatedForm = {
				...prevState.loginForm,
				[input]: {
					...prevState.loginForm[input],
					value: value,
				},
			};
			return {
				loginForm: updatedForm,
			};
		});
	};

	render() {
		return (
			<div className="login_page">
				<div className="row">
					<div className="col-md-6">
						<img src={illustration} alt="" />
					</div>

					<div className="col-md-6 login_page-form my-auto w-100">
						<h1 className="text-center text-primary mb-5 text-uppercase">
							Log In
						</h1>

						<form
							className="w-50 mx-auto"
							onSubmit={(e) =>
								this.props.onLogin(e, {
									email: this.state.loginForm.email.value,
									password: this.state.loginForm.password
										.value,
								})
							}
						>
							<FormGroup
								label="Email"
								type="email"
								id="email"
								onChange={this.inputChangeHandler}
								value={this.state.loginForm['email'].value}
							/>
							<FormGroup
								label="Password"
								type="Password"
								id="password"
								control="input"
								onChange={this.inputChangeHandler}
								value={this.state.loginForm['password'].value}
							/>
							<small
								id="passwordHelpInline"
								className="text-muted"
							>
								Vous n'avez pas de compte? click ici pour
								<NavLink to="/signup"> Sign up</NavLink>
							</small>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
