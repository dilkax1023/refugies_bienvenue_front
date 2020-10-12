import React from 'react';
import Contacts from '../pages/contact/Contacts';
import Config from '../utils/Config';

const urlContact = `${Config.protocol}${Config.host}/contacts`;

class ContactsContainer extends React.Component {
	state = {
		contacts: [],
	};

	componentDidMount() {
		this.fetchData(urlContact);
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
				console.log('resDaContact', resData.data);

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

export default ContactsContainer;
