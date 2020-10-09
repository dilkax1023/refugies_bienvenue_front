import React from 'react';
import illustration from '../../img/Humaaans.png';
import FormGroup from '../../components/UI/FormGroup';

class Signup extends React.Component {
	state = {
		signupForm: {
			email: {
				value: '',
			},
			password: {
				value: '',
			},
			passwordConfirmation: {
				value: '',
			},
			firstName: {
				value: '',
			},
			lastName: {
				value: '',
			},
			phone: {
				value: '',
			},
		},
	};

	inputChangeHandler = (input, value) => {
		this.setState((prevState) => {
			const updatedForm = {
				...prevState.signupForm,
				[input]: {
					...prevState.signupForm[input],
					value: value,
				},
			};

			return {
				signupForm: updatedForm,
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
						<h1 className="text-center mb-3 text-uppercase border-bottom w-min-content text-primary">
							Sign Up
						</h1>
						<form
							className="w-50 mx-auto bg-secondary py-2 px-3 rounded text-light font-weight-bold"
							onSubmit={(e) => this.props.onSignup(e, this.state)}
						>
							<FormGroup
								id="email"
								label="Email"
								type="email"
								onChange={this.inputChangeHandler}
								value={this.state.signupForm['email'].value}
							/>
							<FormGroup
								id="password"
								label="Password"
								type="Password"
								onChange={this.inputChangeHandler}
								value={this.state.signupForm['password'].value}
							/>
							<FormGroup
								id="passwordConfirmation"
								label="Password Confirmation"
								type="password"
								onChange={this.inputChangeHandler}
								value={
									this.state.signupForm[
										'passwordConfirmation'
									].value
								}
							/>
							<FormGroup
								id="lastName"
								label="Last Name"
								type="text"
								onChange={this.inputChangeHandler}
								value={this.state.signupForm['lastName'].value}
							/>
							<FormGroup
								id="firstName"
								label="First Name"
								type="text"
								onChange={this.inputChangeHandler}
								value={this.state.signupForm['firstName'].value}
							/>
							<FormGroup
								id="phone"
								label="Portable"
								type="text"
								onChange={this.inputChangeHandler}
								value={this.state.signupForm['phone'].value}
							/>

							<button
								type="submit"
								className="btn btn-primary w-100 my-3"
							>
								Sign Up
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;
