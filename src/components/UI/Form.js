import React from 'react';
import FormGroup from '../UI/FormGroup';
import Select from './Select';
import TextArea from './TextArea';

const Form = ({
	authData,
	onFormSubmit,
	interlocutorData,
	volunteers,
	rdvDetails,
}) => {
	console.log(rdvDetails, 'rdvdetails');
	return (
		<div>
			<form
				className="w-75 mx-auto"
				onSubmit={(e) => onFormSubmit(e, authData)}
			>
				<div className="row">
					<div className="col">
						<Select
							id="name"
							label="Bénévole"
							onChange={this.inputChangeHandler}
							value={authData['name'].value}
							volunteers={volunteers}
						/>
					</div>
					<div className="col">
						<FormGroup
							id="mail"
							label="Email"
							onChange={this.inputChangeHandler}
							value={authData['mail'].value}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<Select
							id="interlocutor"
							label="Interlocuteur"
							onChange={this.inputChangeHandler}
							value={authData['interlocutor'].value}
						/>
					</div>
					<div className="col">
						<Select
							id="nameInter"
							label="Nom et prénom"
							onChange={this.inputChangeHandler}
							value={authData['nameInter'].value}
							interlocutorData={interlocutorData}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<FormGroup
							id="mailInter"
							label="Email"
							onChange={this.inputChangeHandler}
							value={authData['mailInter'].value}
						/>
					</div>
					<div className="col">
						<FormGroup
							id="phone"
							label="Portable"
							onChange={this.inputChangeHandler}
							value={authData['phone'].value}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<FormGroup
							id="date"
							date="Date"
							onChange={this.inputChangeHandler}
							value={authData['date'].value}
						/>
					</div>
					<div className="col">
						<FormGroup
							id="platform"
							label="Platform"
							onChange={this.inputChangeHandler}
							value={authData['platform'].value}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<Select
							id="jobSearchStatus:"
							label="En recherche d'emploi?"
							onChange={this.inputChangeHandler}
							value={authData['jobSearchStatus'].value}
						/>
					</div>
					<div className="col">
						<Select
							id="trainingStatus"
							label="En Formation?"
							onChange={this.inputChangeHandler}
							value={authData['trainingStatus'].value}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<TextArea
							id="attachements"
							label="Attachements"
							onChange={this.inputChangeHandler}
							value={authData['attachements'].value}
						/>
					</div>
					<div className="col">
						<TextArea
							id="commentaires"
							label="Commentaires"
							onChange={this.inputChangeHandler}
							value={authData['commentaires'].value}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<TextArea
							id="summary"
							label="Summary"
							onChange={this.inputChangeHandler}
							value={authData['summary'].value}
						/>
					</div>
				</div>
				<div className=" w-100 text-center">
					<button
						type="submit"
						className="btn btn-primary w-25 my-4  mx-auto"
					>
						Enregistrer
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
