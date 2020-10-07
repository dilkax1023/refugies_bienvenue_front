import React, { Component } from 'react';
import Contacts from '../../components/mainSection/Contacts';
import Navbar from '../../components/navigation/Navbar';
import Config from '../../utils/Config';
const { host, protocol } = Config;

class ContactsController extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [],
		};
	}

	componentDidMount() {
		const url = `${protocol}${host}/contacts`;
		fetch(url)
			.then((res) => res.json())
			// .then((res) => console.log(res));
			.then((res) =>
				this.setState({
					contacts: res.data,
				})
			);
	}

	render() {
		const { contacts } = this.state;

		return (
			<div className="container my-3">
				<div className="row">
					<div className="col-md-3 col-lg-2 navbar">
						<Navbar />
					</div>
					<div className="col-md-9 col-lg-10 main">
						<h1>Contacts</h1>
						{contacts.length === 0 ? (
							<h2>
								Aucun contact trouvé. Ajoutez-en ci-dessus !
							</h2>
						) : (
							<div class="row">
								<Contacts contacts={contacts} />
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default ContactsController;
