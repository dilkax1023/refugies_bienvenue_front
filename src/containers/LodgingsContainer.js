import React from 'react';
import Lodgings from '../pages/lodging/Lodgings';

class LodgingsContainer extends React.Component {
	state = {
		lodgings: [],
	};

	componentDidMount() {
		this.fetchData('http://localhost:3002/api/lodging');
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

				this.setState({ lodgings: resData.data });
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<Lodgings lodgings={this.state.lodgings} />
			</div>
		);
	}
}

export default LodgingsContainer;
