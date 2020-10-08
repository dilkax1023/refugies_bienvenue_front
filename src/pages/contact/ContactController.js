import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Table from '../../components/UI/Table';

class Contact extends React.Component {
	state = {
		contacts: [],
	};

	componentDidMount() {
		this.fetchData('http://localhost:3002/api/contacts');
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

				this.setState({ contacts: resData.data });
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
							filteredList={this.state.contacts}
							title="contacts"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
