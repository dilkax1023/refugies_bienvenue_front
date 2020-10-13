import React, { Component } from 'react';
import BeneficiaryBilans from '../pages/bilan/BeneficiaryBilans';
import Config from '../utils/Config';
const { host, protocol } = Config;

class BeneficiaryBilansContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bilans: [],
			message: '',
		};
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		const url = `${protocol}${host}/beneficiaries/${id}/reports`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				if (res.success === false) {
					this.setState({
						message: res.message,
					});
					return;
				}

				this.setState({
					bilans: res.data,
				});
			});
	}

	render() {
		console.log('BilanController this.state.bilans', this.state.bilans);
		return (
			<BeneficiaryBilans
				bilans={this.state.bilans}
				message={this.state.message}
			/>
		);
	}
}

export default BeneficiaryBilansContainer;
