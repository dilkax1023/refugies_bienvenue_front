import React, { Component } from 'react';
import BeneficiaryBilans from '../../components/mainSection/BeneficiaryBilans';
import Config from '../../utils/Config';
const { host, protocol } = Config;

class BeneficiaryBilansController extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bilans: [],
		};
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		const url = `${protocol}${host}/beneficiaries/${id}/reports`;
		fetch(url)
			.then((res) => res.json())
			.then((res) =>
				this.setState({
					bilans: res.data,
				})
			);
	}

	render() {
		console.log('BilanController this.state.bilans', this.state.bilans);
		return <BeneficiaryBilans bilans={this.state.bilans} />;
	}
}

export default BeneficiaryBilansController;
