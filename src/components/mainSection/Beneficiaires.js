// import React, { useState } from "react";
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Beneficiaires.css";

class Beneficiaires extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",

      volunteers: [],
      errorMessage: null,
      date: new Date("06", "10", "2020"),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //
  componentDidMount() {
    const url = "http://localhost:3002/api/volunteer";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        // code
        this.setState({
          isLoading: true,
          errorMessage: json,
          volunteer: json,
        });
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("A form was submitted");
    fetch("http://localhost:3002/api/beneficiaries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    }).then((res) => {
      // console.log(res);
      return res.json();
    });

    event.preventDefault();
  }

  onChange = (date) => {
    this.setState({ date: date });
  };
  render() {
    // var { isLoaded, volunteers } = this.state;
    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    // const [selectedDate, setSelectedDate] = useState(null);
    // const [value, onChange] = useState(new Date());
    // const [startDate, setStartDate] = useState(new Date());
    return (
      <div className="container ">
        <h1>Bénéficiaires</h1>

        <div className="identification">
          <h4>Identification</h4>
          <div className="row">
            <div className="col-6 col-md-3">
              Nom
              <form>
                <label s>
                  <input
                    class="form-control"
                    type="text"
                    name="lastName"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>

            <div className="col-6 col-md-3">
              Prénom
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="firstName"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              Date de naissance
              <DatePicker selected={this.state.date} onChange={this.onChange} />
            </div>

            {/* <form>
              <label>
                <input
                  type="text"
                  name="birthDate"
                  onChange={this.handleChange}
                />
                <p>Date de naissance</p>
              </label>
            </form> */}
            {/* 
            <DatePicker
              selected={selectedDate}
              // onSelect={handleDateSelect} //when day is clicked
              onChange={(date) => setSelectedDate(date)} //only when value has changed
            />
          </div> */}

            <div className="col-6 col-md-3">
              Sexe
              <form>
                <label>
                  <input
                    text-align="items-center"
                    class="form-control"
                    type="text"
                    name="gender"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
          </div>

          {/* <div className="col-3">
            <form>
              <label>
                <select id="inputState" class="form-control">
                  <option selected></option>
                  <option>Garcon</option>
                  <option>Fille</option>
                  <option>Autre</option>
                </select>
                <p>Sexe</p>
              </label>
            </form>
          </div> */}

          <div className="row">
            <div className="col-6 col-md-3">
              <form>
                <label>
                  Numéro de téléphone
                  <input
                    class="form-control"
                    type="text"
                    name="phone"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
            <div className="col-6 col-md-3">
              Email
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="mail"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="adresse">
          {/* adresses */}
          <h4>Adresse</h4>
          <div className="row">
            <div className="col-6 col-md-3">
              Adresse
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="streetName"
                    size="60"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              Postal
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="zipCode"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
            <div className="col-6 col-md-3">
              Ville
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="city"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
          </div>
        </div>

        {/* benevole referent */}
        <div className="benevole">
          <h4>Bénévole Référent et autres</h4>
          {/* <h2>{this.state.volunteer.firstName}</h2> */}
          <div className="row">
            <div className="col-6 col-md-3">
              <form>
                <label>
                  Bénevole
                  <select id="inputState" className="form-control">
                    <option selected></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                </label>
              </form>
            </div>
            <div className="col-6 col-md-3">
              Permis de conduire
              <form>
                <label>
                  <select
                    id="inputState"
                    name="hasDrivingLicence"
                    class="form-control"
                    onChange={this.handleChange}
                  >
                    <option selected></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
          {/* <ul>{volunteers.map(volunteer => (

            ))};</ul> */}
          {/* <div className="row">
            <div className="col-3">
              <form>
                <label>
                  <input type="text" name="mail" onChange={this.handleChange} />
                  <p>Mail du bénévole</p>
                </label>
              </form>
            </div>
            <div className="col-3">
              <form>
                <label>
                  <input
                    type="text"
                    name="prenom"
                    onChange={this.handleChange}
                  />
                  <p>Prénom</p>
                </label>
              </form>
            </div>
          </div> */}
          {/*  */}
          {/* <div className="row">
          <div className="col-3">
            <form>
              <label>
                <input type="text" name="nom" onChange={this.handleChange} />
                <p>Fin de cohabitation?: jj/mm/aa</p>
              </label>
            </form>
          </div>
          <div className="col-3">
            <form>
              <label>
                <input
                  type="text"
                  name="dateExitAssociation"
                  onChange={this.handleChange}
                />
                <p>Fin de suivi par RB?: jj/mm/aa</p>
              </label>
            </form>
          </div>
        </div> */}
          {/* date arrive en france */}
          <div className="row">
            <div className="col-6 col-md-3">
              Date d'entrée en RB
              {/* <input
                type="text"
                name="dateArrivalAssociation"
                onChange={this.handleChange}
              /> */}
              <DatePicker selected={this.state.date} onChange={this.onChange} />
            </div>
            <div className="col-6 col-md-3">
              {/* <input
                  type="text"
                  name="dateExitAssociation"
                  onChange={this.handleChange}
                /> */}
              Fin de suivi par RB?
              <DatePicker selected={this.state.date} onChange={this.onChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              {/* <label>
              <input
                type="text"
                name="dateArrivalFrance"
                onChange={this.handleChange}
              />
              <p>Date d'arrivée en France</p>
            </label> */}
              Date d'arrivée en France
              <DatePicker selected={this.state.date} onChange={this.onChange} />
            </div>

            <div className="col-6 col-md-3">
              {/* <label>
              <input
                type="text"
                name="datePiObtaining"
                onChange={this.handleChange}
              />
              <p>
                Date d’obtention de la PI ( Deux types de protections : Le
                statut de réfugié et la protection subsidiaire)
              </p>
            </label> */}
              Date d’obtention de la PI
              <DatePicker selected={this.state.date} onChange={this.onChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              <label>
                {/* <input type="text" name="date" onChange={this.handleChange} /> */}
                Date du prochain RDV
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <div className="col-6 col-md-3">
              <label>
                Numéro ADGREF
                <input
                  class="form-control"
                  type="text"
                  name="agdrefNumber"
                  onChange={this.handleChange}
                />
              </label>
            </div>

            {/* <div className="col-3">
            <form>
              <label>
                <select id="inputState" class="form-control">
                  <option selected></option>
                  <option>A1</option>
                  <option>A2</option>
                  <option>B1</option>
                  <option>B2</option>
                  <option>C1</option>
                  <option>C2</option>
                </select>
                <p>Niveau de français</p>
              </label>
            </form>
          </div> */}
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              Niveau de français (A1, A2, B1, B2, C1, C2)
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="frenchLevelComments"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
        {/* bancaire */}
        <div className="bancaire">
          <h4>Compte Bancaire</h4>
          <div className="row">
            <div className="col-6 col-md-3">
              <form>
                <label>
                  Compte bancaire?
                  <select
                    id="inputState"
                    name="isBankAccount"
                    class="form-control"
                    onChange={this.handleChange}
                  >
                    <option selected></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </label>
              </form>
            </div>

            {/* <div className="col-3">
              <form>
                <label>
                  <input type="text" name="nom" />
                  <p>Si oui, quelle banque? </p>
                </label>
              </form>
            </div> */}
            <div className="col-6 col-md-3">
              {/* <form>
                <label>
                  <input
                    type="text"
                    name="bankName"
                    onChange={this.handleChange}
                  />
                  <p>Si oui, depuis quand: jj/mm/aa</p>
                </label>
              </form> */}
              Si oui, depuis quand
              <DatePicker selected={this.state.date} onChange={this.onChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              DA
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="cirDaStatus"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
            <div className="col-6 col-md-3">
              CIR
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="cirOrDa"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              Commentaires
              <form>
                <textarea
                  class="form-control"
                  name="statusComments"
                  onChange={this.handleChange}
                ></textarea>
              </form>
            </div>
          </div>
        </div>
        {/* formations */}
        <div className="formation">
          <h4>Formation</h4>
          <div className="row">
            {/* <div className="col-3">
              <form>
                <label>
                  <input type="text" name="nom" />
                  <p>Formation ancienne</p>
                </label>
              </form>
            </div> */}
            <div className="col-6 col-md-3">
              Formation actuelle
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="currentTraining"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
            <div className="col-6 col-md-3">
              Formation souahaité
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="wishedTraining"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              Accès à la formation?
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="trainingAccessMode"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>

            <div className="col-6 col-md-3">
              Commentaires
              <form>
                <textarea
                  class="form-control"
                  name="trainingComments"
                  onChange={this.handleChange}
                ></textarea>
              </form>
            </div>
          </div>
        </div>
        {/* travail */}
        <div className="profession">
          <h4>Profession</h4>
          <div className="row">
            {/* <div className="col-3">
              <form>
                <label>
                  <select id="inputState" class="form-control">
                    <option selected></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                  <p>Profession en cours?</p>
                </label>
              </form>
            </div> */}

            {/* <div className="col-3">
              <form>
                <label>
                  <input type="text" name="nom" />
                  <p>Profession ancienne</p>
                </label>
              </form>
            </div> */}
            <div className="col-6 col-md-3">
              Profession actuelle
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="currentJob"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
            <div className="col-6 col-md-3">
              Profession souahaité
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="wishedJob"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              Accés a la profession
              <form>
                <label>
                  <input
                    class="form-control"
                    type="text"
                    name="jobaccessMode"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            </div>

            <div className="col-6 col-md-3">
              Revenus?
              <form>
                <label>
                  <select
                    id="inputState"
                    name="hasIncome"
                    class="form-control"
                    onChange={this.handleChange}
                  >
                    <option selected></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              Montant mensuel
              <label>
                <input
                  class="form-control"
                  type="text"
                  name="incomeValue"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="col-6 col-md-3">
              CV + LDM
              <label>
                <input type="file" name="nom" />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              Commentaire
              <form>
                <textarea class="form-control" name="jobComments"></textarea>
              </form>
            </div>
          </div>
        </div>
        {/* santé */}
        <div className="sante">
          <h4>Santé</h4>
          <div className="row">
            <div className="col-6 col-md-3">
              CMU?
              <form>
                <label>
                  <select id="inputState" name="hasCmu" class="form-control">
                    <option selected></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              Si oui, date de début
              {/* <form>
                  <label>
                    <input
                      type="text"
                      name="cmuStartDate"
                      onChange={this.handleChange}
                    />
                  </label>
                </form> */}
              <DatePicker selected={this.state.date} onChange={this.onChange} />
            </div>
            <div className="col-6 col-md-3">
              Date de fin
              {/* <form>
                  <label>
                    <input
                      type="text"
                      name="cmuEndDate"
                      onChange={this.handleChange}
                    />
                  </label>
                </form> */}
              <DatePicker selected={this.state.date} onChange={this.onChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              Commentaire
              <form>
                <textarea
                  class="form-control"
                  name="healthComments"
                  onChange={this.handleChange}
                ></textarea>
              </form>
            </div>
          </div>
        </div>
        {/* Logement */}
        <div className="logement">
          <h4>Logement</h4>
          <div className="row">
            <div className="col-6 col-md-3">
              Accès au parc privé?
              <form>
                <label>
                  <select id="inputState" class="form-control">
                    <option selected></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </label>
              </form>
            </div>
            <div className="col-6 col-md-3">
              LS + DALO?
              <form>
                <label>
                  <select id="inputState" class="form-control">
                    <option selected></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              Si oui, depuis quand?
              {/* <form>
                  <label>
                    <input type="text" name="nom" />
                    <p>Si oui, depuis quand: jj/mm/aa</p>
                  </label>
                </form> */}
              <DatePicker selected={this.state.date} onChange={this.onChange} />
            </div>
            <div className="col-6 col-md-3">
              <p>SIAO?</p>
              <form>
                <label>
                  <select id="inputState" class="form-control">
                    <option selected></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              Commentaire
              <form>
                <textarea class="form-control"></textarea>
              </form>
            </div>
          </div>
        </div>
        <div className="submit">
          <input type="submit" value="Envoyer le formulaire"></input>
        </div>
      </div>
    );
  }
}
// }
export default Beneficiaires;
