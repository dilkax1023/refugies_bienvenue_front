import React from 'react';
import Beneficiaries from '../pages/beneficiary/Beneficiaires';

class BeneficiarisContainer extends React.Component {
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
				<Beneficiaries filteredList={this.state.beneficiaires} />
			</div>
		);
	}
}

export default BeneficiarisContainer;
