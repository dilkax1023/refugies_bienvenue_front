import React from 'react';

const CardSearchResult = () => {
	return (
		<div
			className="card w-100 d-flex justify-content-center align-items-center"
			id="cardSearchResult"
		>
			<h4 className="card-text p-5">
				{/* Aucun résultat trouvé, votre terme de recherche peut ne pas
				exister dans votre base de données */}
				Enter your term to search
			</h4>
		</div>
	);
};

export default CardSearchResult;
