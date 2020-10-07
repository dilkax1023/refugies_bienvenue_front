import React from 'react';

const Card = ({ title, smallCard, content, onLogout }) => {
	return (
		<div className="card_rdv card mt-3">
			<div className="card-header text-center text-danger font-weight-bold border-0 px-1  mb-2 d-flex justify-content-between">
				<span>{title} </span>
				{title === 'Profile' && (
					<button
						onClick={onLogout}
						className="btn btn-outline-success"
					>
						Logout
					</button>
				)}
			</div>
			<ul className="list-unstyled border-none">
				{smallCard ? (
					<li className={'mt-3'}>
						<h1 className="text-center text-muted">{content}</h1>
					</li>
				) : (
					<li className={'bg-light mt-1 px-1 pt-2'}>
						<span>M. Jan Lawrence</span>
						<span className="float-right">10:00 am</span>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Card;
