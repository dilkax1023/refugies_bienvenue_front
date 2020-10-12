import React from 'react';
import Form from '../components/UI/Form';
import Config from '../utils/Config';

const urlMeeting = `${Config.protocol}${Config.host}/meeting`;

class RdvDetailsMain extends React.Component {
	state = {
		rdvDetails: {},
	};

	componentDidMount() {
		const rdvId = this.props.rdvId;
		const urlRdvDetails = urlMeeting + '/' + rdvId;
		console.log(urlRdvDetails);
		this.fetchData(urlRdvDetails);
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

				this.setState({
					rdvDetails: resData.data,
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		const rdvDetails = [...this.state.rdvDetails];

		return (
			<div className="container mt-5 w-100">
				<h3 className="text-center text-primary text-uppercase font-weight-bold">
					Ajouter un rendez-vous
				</h3>
				<Form rdvDetails={rdvDetails} />
			</div>
		);
	}
}

export default RdvDetailsMain;
