import React from 'react';
import illustration from '../../img/Humaaans.png';

const Login = () => {
	return (
		<div className='login_page'>
			<div className='row'>
				<div className='col-md-6'>
					<img src={illustration} alt='' />
				</div>

				<div className='col-md-6 login_page-form my-auto w-100'>
					<h1 className='text-center mb-5 text-uppercase'>Log In</h1>

					<form className='w-50 mx-auto'>
						<div className='form-group'>
							<label htmlFor='exampleInputEmail1'>
								Email address
							</label>
							<input
								type='email'
								className='form-control'
								id='exampleInputEmail1'
								aria-describedby='emailHelp'
								placeholder='Enter email'
							/>
							<small
								id='emailHelp'
								className='form-text text-muted'>
								We'll never share your email with anyone else.
							</small>
						</div>
						<div className='form-group'>
							<label htmlFor='exampleInputPassword1'>
								Password
							</label>
							<input
								type='password'
								className='form-control'
								id='exampleInputPassword1'
								placeholder='Password'
							/>
						</div>
						<div className='form-check'>
							<input
								type='checkbox'
								className='form-check-input'
								id='exampleCheck1'
							/>
							<label
								className='form-check-label'
								htmlFor='exampleCheck1'>
								Check me out
							</label>
						</div>
						<button type='submit' className='btn btn-primary'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
