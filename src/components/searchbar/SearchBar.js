import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<div className='row search-bar mx-2 mt-3 '>
				<div className='col-lg-3 col-md-6'>
					<p className='py-2 mb-0'>Jeu. 18 Oct 2020</p>
				</div>
				<div className='col-lg-6 col-md-6'>
					<form className='w-100 h-100'>
						<div className='form-row align-items-center w-100 h-100 justify-content-center'>
							<div className='col-auto w-75'>
								<input
									type='text'
									className='form-control'
									placeholder='Search'
								/>
							</div>
							<div className='col-auto'>
								<button
									type='submit'
									className='btn btn-success'>
									Search
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className='col-lg-3 col-md-6'>
					<p className='py-2 mb-0 text-right'>10:34:11</p>
				</div>
			</div>
		);
	}
}

export default SearchBar;
