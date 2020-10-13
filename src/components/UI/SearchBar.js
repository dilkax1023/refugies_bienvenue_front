import React from 'react';
import Clock from '../../utils/Clock';

const SearchBar = ({ onClickSearch, onInputChange, value }) => {
	return (
		<div className="row search-bar mx-2 mt-3 ">
			<div className="col-lg-3 col-md-6">
				<Clock left="left" />
			</div>
			<div className="col-lg-6 col-md-6">
				<form
					className="w-100 h-100"
					onSubmit={(e) => onClickSearch(e)}
				>
					<div className="form-row align-items-center w-100 h-100 justify-content-center">
						<div className="col-auto w-75">
							<input
								onChange={(e) => onInputChange(e.target.value)}
								type="text"
								className="form-control"
								placeholder="Search"
								value={value}
							/>
						</div>
						<div className="col-auto">
							<button type="submit" className="btn btn-primary">
								Search
							</button>
						</div>
					</div>
				</form>
			</div>
			<div className="col-lg-3 col-md-6">
				<Clock />
			</div>
		</div>
	);
};

export default SearchBar;
