import React from 'react';
import Button from './Button';

const CardList = ({
	smallCard,
	firstName,
	lastName,
	content,
	phone,
	_id,
	children,
}) => {
	return (
		<div className="card_rdv card mt-3">
			<div className="card-header text-center text-danger font-weight-bold border-0 px-1  mb-2 d-flex justify-content-between">
				<span>
					{firstName} {lastName}
				</span>
			</div>
			<ul className="list-unstyled border-none">
				{smallCard ? (
					<li className={'mt-3 '}>{children}</li>
				) : (
					<li className={'bg-light mt-1 pl-2 px-1 pt-2'}>
						{children}
					</li>
				)}
			</ul>
		</div>
	);
};

export default CardList;
