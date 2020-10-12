import React from 'react';
import Contacts from '../pages/contact/Contacts';

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
				<Contacts contacts={this.state.contacts} />
			</div>
		);
	}
}

export default Contact;
