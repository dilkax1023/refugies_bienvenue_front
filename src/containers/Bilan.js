import React from 'react';
import Navbar from '../navigation/Navbar';
import './Bilan.css';

const renderBilan = (bilan) => {
	return (
		<div className="col-md-9 col-lg-10 main">
			<h1 className="page-title">
				{bilan.beneficiary.firstName} {bilan.beneficiary.lastName} -
				Bilan du {new Date(bilan.date).toLocaleDateString()}
			</h1>

			<div className="container-lg feedback">
				<div className="row">
					<div className="col-12">
						<section className="feedback-section">
							<h2
								className={
									bilan.commentsFrenchLevel
										? 'col-4'
										: 'col-6'
								}
							>
								Niveau de français
							</h2>
							<ul
								className={
									bilan.commentsFrenchLevel
										? 'col-8'
										: 'col-6'
								}
							>
								<li>
									<em>À l'entrée du programme RB : </em>
									<strong>{bilan.arrivalFrenchLevel}</strong>
								</li>
								{bilan.exitFrenchLevel !== null && (
									<li>
										<em>À la sortie du programme RB : </em>
										<strong>{bilan.exitFrenchLevel}</strong>
									</li>
								)}
								<li>
									Perçois-tu une amélioration en Français ?{' '}
									<strong>
										{bilan.perceivedAmeliorationFrenchLevel
											? 'Oui'
											: 'Non'}
									</strong>
								</li>
								{bilan.commentsFrenchLevel && (
									<li>
										<p>
											<em>Commentaires :</em>
										</p>
										<blockquote>
											<em className="quotation">“</em>
											{bilan.commentsFrenchLevel}
											<em className="quotation">”</em>
										</blockquote>
									</li>
								)}
							</ul>
							<div className="stamp"></div>
						</section>

						<section className="feedback-section">
							<h2 className="col-3">Gain de confiance</h2>
							<ul className="col-9">
								<li>
									<p>
										<em>
											Penses-tu avoir gagné en autonomie
											pendant le programme RB ? Te sens-tu
											plus à l’aise pour t'exprimer en
											français ? Te sens-tu capable
											d’entreprendre des démarches
											(professionnelles, administratives…)
											seul ?
										</em>
									</p>
									<blockquote>
										<em className="quotation">“</em>
										{bilan.confidenceGain}
										<em className="quotation">”</em>
									</blockquote>
								</li>
							</ul>
							<div className="stamp"></div>
						</section>

						<section className="feedback-section">
							<h2 className="col-3">Gain en autonomie</h2>
							<ul className="col-9">
								<li>
									<p>
										<em>
											Le programme RB t'a-t-il permis
											d'entreprendre des démarches pour ta
											vie personnelle et/ou
											professionnelle (bénévolat,
											recherche d'emploi, activités...) ?
										</em>
									</p>
									<p>
										<strong>
											{bilan.isAssociationUseful
												? 'Oui'
												: 'Non'}
										</strong>
									</p>
								</li>
								{bilan.isAssociationUseful && (
									<>
										<li>
											<p>
												<em>
													Si oui, quels aspects du
													programme RB t'a permis
													d'entreprendre cela
													(stabilité du logement,
													accompagnement social, aide
													hébergeurs...) ?
												</em>
											</p>
											<blockquote>
												<em className="quotation">“</em>
												{bilan.commentsOnAssociation}
												<em className="quotation">”</em>
											</blockquote>
										</li>
										<li>
											<p>
												<em>
													Quelles démarches as-tu
													entreprises ?
												</em>
											</p>
											<blockquote>
												<em className="quotation">“</em>
												{bilan.takenSteps}
												<em className="quotation">”</em>
											</blockquote>
										</li>
									</>
								)}
							</ul>
							<div className="stamp"></div>
						</section>

						<section className="feedback-section">
							<h2 className="col-3">Histoire avec RB</h2>
							<ul className="col-9">
								<li>
									<p>
										<em>
											Peux-tu me raconter ton histoire et
											où et quand tu as rencontré RB ?
										</em>
									</p>
									<blockquote>
										<em className="quotation">“</em>
										{bilan.journeyFeedback}
										<em className="quotation">”</em>
									</blockquote>
								</li>
								<li>
									<p>
										<em>
											Peux-tu me raconter ton expérience
											avec RB ?
										</em>
									</p>
									<blockquote>
										<em className="quotation">“</em>
										{bilan.associationFeedback}
										<em className="quotation">”</em>
									</blockquote>
								</li>
								<li>
									<p>
										<em>
											Peux-tu me parler des gens que tu as
											rencontrés (hébergeurs, bénévoles,
											autres hébergés, autres membres de
											l'équipe) ? Les activités que vous
											avez faites ensemble ? Les
											évènements auxquels vous avez
											participé ?
										</em>
									</p>
									<blockquote>
										<em className="quotation">“</em>
										{bilan.peopleMetFeedback}
										<em className="quotation">”</em>
									</blockquote>
								</li>
							</ul>
							<div className="stamp"></div>
						</section>

						<section className="feedback-section">
							<h2 className="col-3">Futur</h2>
							<ul className="col-9">
								<li>
									<p>
										<em>Qu'envisages-tu pour la suite ?</em>
									</p>
									<blockquote>
										<em className="quotation">“</em>
										{bilan.goals}
										<em className="quotation">”</em>
									</blockquote>
								</li>
							</ul>
							<div className="stamp"></div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

const Bilan = ({ bilan }) => {
	console.log('props', bilan);
	return (
		<div className="container-fluid">
			<div className="row no-gutters" id="page-height">
				<div className="col-md-3 col-lg-2 navbar">
					<Navbar />
				</div>
				{Object.keys(bilan).length > 0 && renderBilan(bilan)}
			</div>
		</div>
	);
};

export default Bilan;
