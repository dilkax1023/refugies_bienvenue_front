import React from 'react';

class ListBeneficiaires extends React.Component {
	render() {
		const { items } = this.props;
		if (items.length === 0) {
			return <h3 className="col-12">Aucun bénéficiaire</h3>;
		}
		return (
			<div className="col-12">
				<ul className="list-group">
					{items.map(({ name }, index) => {
						return (
							<li
								className="list-group-item d-flex justify-content-between align-items-center"
								key={index}
							>
								{name}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default ListBeneficiaires;
