import React, { Component } from "react";
import Navbar from "../../components/navigation/Navbar";
// import Card from "../../components/UI/Card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../components/mainSection/Beneficiaires.css";

class Hebergement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   name: "",

      //   volunteers: [],
      //   errorMessage: null,
      date: new Date("2020-06-10"),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("A form was submitted");
    fetch("http://localhost:3002/api/beneficiaries", {
      // add the adresse hergements here
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
    return (
      <div className="my-3 mx-5">
        <div className="row">
          <div className="col-md-3 col-lg-2 navbar">
            <Navbar />
          </div>
          <div className="col-md-9 col-lg-10 main">
            <div className="container ">
              <h1>Hébergement</h1>
              <div className="identification">
                <h4>Identification</h4>
                <div className="row justify-content-md-center">
                  <div className="col-xl-3">
                    <form>
                      <form>
                        <label>
                          <input
                            type="text"
                            class="form-control"
                            name="nom"
                            onChange={this.handleChange}
                          />
                          <p>Nom</p>
                        </label>
                      </form>
                    </form>
                  </div>
                  <div className="col-xl-3">
                    <form>
                      <label>
                        <input
                          type="text"
                          class="form-control"
                          name="prenom"
                          onChange={this.handleChange}
                        />
                        <p>Prénom</p>
                      </label>
                    </form>
                  </div>
                </div>
                <div className="row justify-content-md-center">
                  <div className="col-xl-3">
                    Date de naissance
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="row justify-content-md-center">
                  <div className="col-xl-3">
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
                  <div className="col-xl-3">
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
                <div className="row justify-content-md-center">
                  <div className="col-xl-3">
                    Adresse
                    <form>
                      <label>
                        <input
                          class="form-control"
                          type="text"
                          name="streetName"
                          onChange={this.handleChange}
                        />
                      </label>
                    </form>
                  </div>
                </div>
                <div className="row justify-content-md-center">
                  <div className="col-xl-3">
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
                  <div className="col-xl-3">
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
              {/* logement */}
              <div className="logement">
                <h4>Logement</h4>
                <div className="row justify-content-md-center">
                  <div className="col-xl-3">
                    Logement disponible?
                    <form>
                      <label>
                        <select id="inputState" class="form-control">
                          <option selected>Oui</option>
                          <option>Non</option>
                        </select>
                      </label>
                    </form>
                  </div>
                  <div className="col-xl-3">
                    Type de logement?
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
                </div>
                <div className="row justify-content-md-center">
                  <div className="col-xl-3">
                    Cohabitation en cours
                    <form>
                      <label>
                        <input
                          type="text"
                          class="form-control"
                          name="possees"
                        />
                      </label>
                    </form>
                  </div>

                  <div className="col-xl-3">
                    Cohabitation passées
                    <form>
                      <label>
                        <input
                          type="text"
                          class="form-control"
                          name="possees"
                        />
                      </label>
                    </form>
                  </div>
                </div>
                <div className="row justify-content-md-center">
                  <div className="col-xl-3">
                    Date de début
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-xl-3">
                    Fin de cohabitation
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="row justify-content-md-center">
                  <div className="col-xl-3">
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

              <div className="submit">
                <input type="submit" value="Envoyer le formulaire"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Hebergement;
