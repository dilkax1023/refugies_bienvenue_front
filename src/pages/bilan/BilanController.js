import React, { Component } from 'react';
import Bilan from '../../components/mainSection/Bilan';
import Config from '../../utils/Config';
const { host, protocol } = Config;

class BilanController extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bilan: {},
		};
	}

	componentDidMount() {
		const { beneficiaryId, bilanId } = this.props.match.params;
		const url = `${protocol}${host}/beneficiaries/${beneficiaryId}/reports/${bilanId}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) =>
				this.setState({
					bilan: res.data,
				})
			);
	}

	render() {
		console.log(this.state.bilan);
		return <Bilan bilan={this.state.bilan} />;
	}
}

export default BilanController;
