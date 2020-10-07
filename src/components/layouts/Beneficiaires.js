import React from "react";
import Navbar from "./Navbar";
// import useForm from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
// import { InputGroup } from "react-bootstrap/InputGroup";

class Beneficiaires extends React.Component {
  render() {
    return (
      <div className="my-3 mx-5">
        <div className="row">
          <div className="col-md-3 col-lg-2 navbar">
            <Navbar />
          </div>
          <div className="col-md-9 col-lg-10 main">
            <h1>Bénéficiaires</h1>

            <h4>Identification</h4>
            <div className="row">
              <div className="col-3">
                <form>
                  <label>
                    <input type="text" name="nom" />
                    <p>Nom</p>
                  </label>
                </form>
              </div>
              <div className="col-3">
                <form>
                  <label>
                    <input type="text" name="prenom" />
                    <p>Prénom</p>
                  </label>
                </form>
              </div>

              <div className="col-3">
                <form>
                  <label>
                    <input type="text" name="born" />
                    <p>Date de naissance</p>
                  </label>
                </form>
              </div>
              <div className="col-3">
                <form>
                  <label>
                    <p>Sexe?</p>
                    <select id="inputState" class="form-control">
                      <option selected>Garcon</option>
                      <option>Fille</option>
                      <option>Autre</option>
                    </select>
                  </label>
                </form>
              </div>
              {/* <div class="form-check form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Garcon
                </label>
                <p>Sexe</p>
              </div>

              <div class="form-check form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Fille
                </label>
              </div>
              <div class="form-check form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Autre
                </label>
              </div>
            </div> */}
              <div className="row">
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="tel" />
                      <p>Numéro de téléphone</p>
                    </label>
                  </form>
                </div>
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="email" />
                      <p>Email</p>
                    </label>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="adresse" />
                      <p>Adresse</p>
                    </label>
                  </form>
                </div>
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="postal" />
                      <p>Postal</p>
                    </label>
                  </form>
                </div>
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="ville" />
                      <p>Ville</p>
                    </label>
                  </form>
                </div>
              </div>
              <h4>Bénévole Référent</h4>
              <div className="row">
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="nom" />
                      <p>Nom</p>
                    </label>
                  </form>
                </div>
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="prenom" />
                      <p>Prénom</p>
                    </label>
                  </form>
                </div>
              </div>
              {/* hebergeur */}
              <h4>Hébergeur</h4>
              <div className="row">
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="nom" />
                      <p>Nom</p>
                    </label>
                  </form>
                </div>
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="prenom" />
                      <p>Prénom</p>
                    </label>
                  </form>
                </div>
              </div>

              <div className="row">
                <div class="form-check form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Oui
                  </label>
                  <p>Si pas hébergeur</p>
                </div>

                <div class="form-check form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Non
                  </label>
                </div>
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="nom" />
                      <p>
                        Si pas héberger: liste d’attente (depuis le jj/mm/aa) +
                        à la rue ?
                      </p>
                    </label>
                  </form>
                </div>
              </div>
              {/*  */}
              <div className="row">
                <div class="form-check form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Oui
                  </label>
                  <p>Fin de cohabitation</p>
                </div>

                <div class="form-check form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Non
                  </label>
                </div>
                <div className="col-3">
                  <label>
                    <input type="text" name="nom" />
                    <p>Si oui quand: jj/mm/aa</p>
                  </label>
                </div>
                <div className="row">
                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Oui
                    </label>
                    <p>Fin de suivi par RB?</p>
                  </div>

                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Non
                    </label>
                  </div>
                  <div className="col-3">
                    <label>
                      <input type="text" name="nom" />
                      <p>Si oui quand: jj/mm/aa</p>
                    </label>
                  </div>
                </div>
              </div>
              {/* date arrive en france */}
              <div className="row">
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="nom" />
                      <p>Date d'arrivée en France</p>
                    </label>
                  </form>
                </div>
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="prenom" />
                      <p>Date de prise en charge par l'association</p>
                    </label>
                  </form>
                </div>
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="prenom" />
                      <p>
                        Date d’obtention de la PI ( Deux types de protections :
                        Le statut de réfugié et la protection subsidiaire)
                      </p>
                    </label>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="nom" />
                      <p>Date du prochain RDV mensuel prévus: jj/mm/aa</p>
                    </label>
                  </form>
                </div>
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="prenom" />
                      <p>
                        Numéro ADGREF C’est le numéro d’étranger de10 chiffres
                        qui figure sur le titre de séjour
                      </p>
                    </label>
                  </form>
                </div>
                <div className="row">
                  <p>Niveau de français:</p>
                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />

                    <label class="form-check-label" for="inlineRadio1">
                      A1
                    </label>
                    {/* <p>Niveau de français</p> */}
                  </div>

                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      A2
                    </label>
                  </div>
                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="option3"
                    />
                    <label class="form-check-label" for="inlineRadio3">
                      B1
                    </label>
                  </div>
                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio4"
                      value="option4"
                    />
                    <label class="form-check-label" for="inlineRadio4">
                      B2
                    </label>
                  </div>
                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio5"
                      value="option5"
                    />
                    <label class="form-check-label" for="inlineRadio4">
                      C1
                    </label>
                  </div>
                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio6"
                      value="option6"
                    />
                    <label class="form-check-label" for="inlineRadio4">
                      C2
                    </label>
                  </div>
                </div>
              </div>
              <form>
                <textarea>Commentaires</textarea>
              </form>
              {/* bancaire */}
              <div>
                <h4>Compte Bancaire</h4>
                <div className="row">
                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Oui
                    </label>
                    <p>Compte bancaire</p>
                  </div>

                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Non
                    </label>
                  </div>
                  <div className="col-3">
                    <form>
                      <label>
                        <input type="text" name="nom" />
                        <p>Si oui, quelle banque? </p>
                      </label>
                    </form>
                  </div>
                  <div className="col-3">
                    <form>
                      <label>
                        <input type="text" name="nom" />
                        <p>Si oui, depuis quand: jj/mm/aa</p>
                      </label>
                    </form>
                  </div>
                  <div className="row">
                    <div class="form-check form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        Oui
                      </label>
                      <p>Permis de conduire?</p>
                    </div>

                    <div class="form-check form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        Non
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      DA
                    </label>
                  </div>

                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      CIR
                    </label>
                  </div>
                  <div className="col-3">
                    <form>
                      <textarea></textarea>
                      <p>Commentaire/état procédure: mises à jour </p>
                    </form>
                  </div>
                </div>
              </div>
              {/* formations */}
              <div>
                <h4>Formation</h4>
                <div className="row">
                  <div className="col-3">
                    <form>
                      <label>
                        <input type="text" name="nom" />
                        <p>Formation ancienne</p>
                      </label>
                    </form>
                  </div>
                  <div className="col-3">
                    <form>
                      <label>
                        <input type="text" name="nom" />
                        <p>Formation actuelle</p>
                      </label>
                    </form>
                  </div>
                  <div className="col-3">
                    <form>
                      <label>
                        <input type="text" name="nom" />
                        <p>Formation souahaité </p>
                      </label>
                    </form>
                  </div>
                  <div className="col-3">
                    <form>
                      <label>
                        <input type="text" name="nom" />
                        <p>Quel accès à la formation?</p>
                      </label>
                    </form>
                  </div>
                </div>
                <form>
                  <textarea></textarea>
                  <p>Commentaire</p>
                </form>
              </div>
              {/* travail */}
              <div>
                <h4>Profession</h4>
                <div className="row">
                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Oui
                    </label>
                    <p>Profession en cours?</p>
                  </div>

                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Non
                    </label>
                  </div>
                  <div className="col-3">
                    <form>
                      <label>
                        <input type="text" name="nom" />
                        <p>Profession ancienne</p>
                      </label>
                    </form>
                  </div>
                  <div className="col-3">
                    <form>
                      <label>
                        <input type="text" name="nom" />
                        <p>Profession actuelle</p>
                      </label>
                    </form>
                  </div>
                  <div className="col-3">
                    <form>
                      <label>
                        <input type="text" name="nom" />
                        <p>Profession souahaité </p>
                      </label>
                    </form>
                  </div>
                </div>
                <div className="row">
                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Oui
                    </label>
                    <p>Revenus?</p>
                  </div>

                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Non
                    </label>
                  </div>
                  <div className="col-3">
                    <form>
                      <label>
                        <input type="text" name="nom" />
                        <p>Montant mensuel</p>
                      </label>
                    </form>
                  </div>
                  <div className="col-3">
                    <form>
                      <label>
                        <input type="file" name="nom" />
                        <p>CV + LDM</p>
                      </label>
                    </form>
                  </div>
                  <div className="col-3">
                    <form>
                      <textarea></textarea>
                      <p>Commentaire</p>
                    </form>
                  </div>
                </div>
              </div>
              {/* santé */}
              <h4>Santé</h4>

              <div className="row">
                <div class="form-check form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Oui
                  </label>
                  <p>CMU?</p>
                </div>

                <div class="form-check form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Non
                  </label>
                </div>

                {/*  */}
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="nom" />
                      <p>Si oui, date de début </p>
                    </label>
                  </form>
                </div>
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="nom" />
                      <p>Date de fin </p>
                    </label>
                  </form>
                </div>
                <div className="col-3">
                  <form>
                    <textarea></textarea>
                    <p>Commentaire</p>
                  </form>
                </div>
              </div>
              {/* Logement */}
              <h4>Logement</h4>
              <div className="row">
                <div class="form-check form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Oui
                  </label>
                  <p>Accès au parc privé?</p>
                </div>

                <div class="form-check form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Non
                  </label>
                </div>
              </div>
              <div className="row">
                <div class="form-check form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Oui
                  </label>
                  <p>LS + DALO</p>
                </div>

                <div class="form-check form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Non
                  </label>
                </div>
                <div className="col-3">
                  <form>
                    <label>
                      <input type="text" name="nom" />
                      <p>Si oui, depuis quand: jj/mm/aa</p>
                    </label>
                  </form>
                </div>
                <div className="row">
                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Oui
                    </label>
                    <p>SIAO</p>
                  </div>

                  <div class="form-check form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Non
                    </label>
                  </div>
                  <div className="col-3">
                    <form>
                      <txtearea>
                        <p>Commentaires</p>
                      </txtearea>
                    </form>
                  </div>
                </div>
              </div>
              <input type="submit" value="Envoyer le formulaire"></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Beneficiaires;
