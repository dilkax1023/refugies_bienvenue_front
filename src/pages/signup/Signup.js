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
			formIsValid: false,
		},
	};

	inputChangeHandler = (input, value) => {
		this.setState(prevState => {
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
			<div className='login_page'>
				<div className='row'>
					<div className='col-md-6'>
						<img src={illustration} alt='' />
					</div>
					<div className='col-md-6 login_page-form my-auto w-100'>
						<h1 className='text-center mb-5 text-uppercase'>
							Sign Up
						</h1>
						<form
							className='w-50 mx-auto'
							onSubmit={e => this.props.onSignup(e, this.state)}>
							<FormGroup
								id='email'
								label='Email'
								type='email'
								onChange={this.inputChangeHandler}
								value={this.state.signupForm['email'].value}
							/>
							<FormGroup
								id='password'
								label='Password'
								type='Password'
								onChange={this.inputChangeHandler}
								value={this.state.signupForm['password'].value}
							/>
							<FormGroup
								id='passwordConfirmation'
								label='Password Confirmation'
								type='Password'
								onChange={this.inputChangeHandler}
								value={
									this.state.signupForm[
										'passwordConfirmation'
									].value
								}
							/>

							<button type='submit' className='btn btn-primary'>
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
