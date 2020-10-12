import React from 'react';
import RdvDeSuivi from '../pages/rdv/RdvDeSuivi';
import Config from '../utils/Config';

const urlMeetings = `${Config.protocol}${Config.host}/meetings`;

class RdvDeSuiviContainer extends React.Component {
	state = {
		meetings: [],
	};

	componentDidMount() {
		this.fetchData(urlMeetings);
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
				console.log('resDaMeeting', resData.data);
				this.setState({ meetings: resData.data });
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<RdvDeSuivi meetings={this.state.meetings} />
			</div>
		);
	}
}

export default RdvDeSuiviContainer;
