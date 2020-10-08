import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Table from '../../components/UI/Table';
import Config from '../../utils/Config';

const urlMeetings = `${Config.protocol}${Config.host}/meetings`;

class Rdv extends React.Component {
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
				<div className="row" id="page-height">
					<div className="col-md-3 col-lg-2 navbar">
						<Navbar />
					</div>
					<div className="col-md-9 col-lg-10 main">
						<Table
							filteredList={this.state.meetings}
							title="meeting"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Rdv;
