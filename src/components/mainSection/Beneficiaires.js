import React from "react";
// import Navbar from "../../components/navigation/Navbar";

class Beneficiaires extends React.Component {
  render() {
    return (
      <div className="container">
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
                <select id="inputState" class="form-control">
                  <option selected></option>
                  <option>Garcon</option>
                  <option>Fille</option>
                  <option>Autre</option>
                </select>
                <p>Sexe</p>
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

          <div className="col-3">
            <form>
              <label>
                <select id="inputState" class="form-control">
                  <option selected></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
                <p>Héberger?</p>
              </label>
            </form>
          </div>
          <div className="col-3">
            <form>
              <label>
                <input type="text" name="nom" />
                <p>
                  Si pas héberger: liste d’attente (depuis le jj/mm/aa) + à la
                  rue ?
                </p>
              </label>
            </form>
          </div>
        </div>
        {/*  */}
        <div className="row">
          <div className="col-3">
            <form>
              <label>
                <select id="inputState" class="form-control">
                  <option selected></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
                <p>Fin de cohabitation?</p>
              </label>
            </form>
          </div>
          <div className="col-3">
            <form>
              <label>
                <input type="text" name="nom" />
                <p>Si oui quand: jj/mm/aa</p>
              </label>
            </form>
          </div>

          <div className="col-3">
            <form>
              <label>
                <select id="inputState" class="form-control">
                  <option selected></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
                <p>Fin de suivi par RB?</p>
              </label>
            </form>
          </div>
          <div className="col-3">
            <form>
              <label>
                <input type="text" name="nom" />
                <p>Si oui quand: jj/mm/aa</p>
              </label>
            </form>
          </div>
        </div>

        {/* date arrive en france */}
        <div className="row">
          <div className="col-3">
            <label>
              <input type="text" name="nom" />
              <p>Date d'arrivée en France</p>
            </label>
          </div>
          <div className="col-3">
            <label>
              <input type="text" name="prenom" />
              <p>Date de prise en charge par l'association</p>
            </label>
          </div>
          <div className="col-3">
            <label>
              <input type="text" name="prenom" />
              <p>
                Date d’obtention de la PI ( Deux types de protections : Le
                statut de réfugié et la protection subsidiaire)
              </p>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>
              <input type="text" name="nom" />
              <p>Date du prochain RDV mensuel prévus: jj/mm/aa</p>
            </label>
          </div>
          <div className="col-3">
            <label>
              <input type="text" name="prenom" />
              <p>
                Numéro ADGREF C’est le numéro d’étranger de10 chiffres qui
                figure sur le titre de séjour
              </p>
            </label>
          </div>

          <div className="col-3">
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
          </div>
          <textarea>Commentaires</textarea>
        </div>

        {/* bancaire */}
        <div>
          <h4>Compte Bancaire</h4>
          <div className="row">
            <div className="col-3">
              <form>
                <label>
                  <select id="inputState" class="form-control">
                    <option selected></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                  <p>Compte bancaire?</p>
                </label>
              </form>
            </div>

            <div className="col-3">
              <label>
                <input type="text" name="nom" />
                <p>Si oui, quelle banque? </p>
              </label>
            </div>
            <div className="col-3">
              <label>
                <input type="text" name="nom" />
                <p>Si oui, depuis quand: jj/mm/aa</p>
              </label>
            </div>
            <div className="col-3">
              <form>
                <label>
                  <select id="inputState" class="form-control">
                    <option selected></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                  <p>Permis de conduire?</p>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-3">
              <form>
                <label>
                  <select id="inputState" class="form-control">
                    <option selected></option>
                    <option>DA</option>
                    <option>CIR</option>
                  </select>
                  <p></p>
                </label>
              </form>
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
          </form>
          <p>Commentaire</p>
        </div>
        {/* travail */}
        <div>
          <h4>Profession</h4>
          <div className="row">
            <div className="col-3">
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
            <div className="col-3">
              <form>
                <label>
                  <select id="inputState" class="form-control">
                    <option selected></option>
                    <option>Oui</option>
                    <option>Non</option>
                  </select>
                  <p>Revenus?</p>
                </label>
              </form>
            </div>

            <div className="col-3">
              <label>
                <input type="text" name="nom" />
                <p>Montant mensuel</p>
              </label>
            </div>
            <div className="col-3">
              <label>
                <input type="file" name="nom" />
                <p>CV + LDM</p>
              </label>
            </div>
            <div className="col-3">
              <form>
                <textarea></textarea>
              </form>
              <p>Commentaire</p>
            </div>
          </div>
        </div>
        {/* santé */}
        <h4>Santé</h4>

        <div className="row">
          <div className="col-3">
            <form>
              <label>
                <select id="inputState" class="form-control">
                  <option selected></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
                <p>CMU?</p>
              </label>
            </form>
          </div>

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
            </form>
            <p>Commentaire</p>
          </div>
        </div>
        {/* Logement */}
        <h4>Logement</h4>
        <div className="row">
          <div className="col-3">
            <form>
              <label>
                <select id="inputState" class="form-control">
                  <option selected></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
                <p>Accès au parc privé?</p>
              </label>
            </form>
          </div>
          <div className="col-3">
            <form>
              <label>
                <select id="inputState" class="form-control">
                  <option selected></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
                <p>LS + DALO?</p>
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
          <div className="col-3">
            <form>
              <label>
                <select id="inputState" class="form-control">
                  <option selected></option>
                  <option>Oui</option>
                  <option>Non</option>
                </select>
                <p>SIAO?</p>
              </label>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <form>
              <textarea></textarea>
            </form>
            <p>Commentaire</p>
          </div>
        </div>

        <input type="submit" value="Envoyer le formulaire"></input>
      </div>
    );
  }
}
export default Beneficiaires;
