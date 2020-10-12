import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Table from '../../components/UI/Table';

class Beneficiary extends React.Component {
	state = {
		beneficiaires: [],
	};

	componentDidMount() {
		this.fetchData('http://localhost:3002/api/beneficiaries');
	}

	fetchData = (url) => {
		fetch(url)
			.then((res) => {
				if (res.status !== 200) {
					throw new Error('Failed to fetch user status.');
				}
				return res.json();
			})
			.then((resData) => {
				console.log('resDa', resData.data);

				this.setState({ beneficiaires: resData.data });
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<div className="row" id="page-height">
					<div className="col-md-3 col-lg-2 navbar">
						<Navbar />
					</div>
					<div className="col-md-9 col-lg-10 main">
						<Table
							// filteredList={this.state.beneficiaires}
							title="beneficiary"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Beneficiary;
