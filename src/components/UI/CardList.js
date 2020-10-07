import React from 'react';

const CardList = ({ smallCard, firstName, lastName, children }) => {
	return (
		<div className="card_rdv card mt-3 col-12">
			<div className="card-header text-center text-danger font-weight-bold border-0 px-1  mb-2 d-flex justify-content-between">
				<span>
					{firstName} {lastName}
				</span>
			</div>
			<ul className="list-unstyled">{smallCard ? children : children}</ul>
		</div>
	);
};

export default CardList;
