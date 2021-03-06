import React from 'react';
// import Lodgings from '../pages/lodging/Lodgings';
import Navbar from '../components/navigation/Navbar';
import Table from '../components/UI/Table';

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
			<div className="row" id="page-height">
				<div className="col-md-3 col-lg-2 navbar">
					<Navbar />
				</div>
				<div className="col-md-9 col-lg-10 main">
					<Table filteredList={this.state.lodgings} title="lodging" />
				</div>
			</div>
		);
	}
}

export default LodgingsContainer;
