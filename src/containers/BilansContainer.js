import React, { Component } from 'react';
import Bilans from '../pages/bilan/Bilans';
import Config from '../utils/Config';
const { host, protocol } = Config;

class BilansContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bilans: [],
		};
	}

	componentDidMount() {
		const url = `${protocol}${host}/beneficiaries/reports`;
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
		return <Bilans bilans={this.state.bilans} />;
	}
}

export default BilansContainer;
