import React from "react";
import Navbar from "../../components/navigation/Navbar";
import Card from "../../components/UI/Card";

const Hebergement = (props) => {
  return (
    <div className="my-3 mx-5">
      <div className="row">
        <div className="col-md-3 col-lg-2 navbar">
          <Navbar />
        </div>
        <div className="col-md-9 col-lg-10 main">
          <h1>Hébergment</h1>

          <h4>Identification</h4>
          <div className="row">
            <div className="col-3">
              <form>
                <form>
                  <label>
                    <input type="text" name="nom" />
                    <p>Nom</p>
                  </label>
                </form>
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
          <div className="row">
            <div className="col-3">
              <form>
                <label>
                  <input type="text" name="telephone" />
                  <p>Télephone</p>
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
          <div className="col-3">
            <form>
              <label>
                <select id="inputState" class="form-control">
                  <option selected>Oui</option>
                  <option>Non</option>
                </select>
                <p>Logement disponible?</p>
              </label>
            </form>
          </div>
          <div className="row">
            <div className="col-3">
              <form>
                <label>
                  <input type="text" name="logement" />
                  <p>Type de logement?</p>
                </label>
              </form>
            </div>
            <div className="col-3">
              <form>
                <label>
                  <input type="text" name="possees" />
                  <p>Cohabitation en cours</p>
                </label>
              </form>
            </div>
            <div className="col-3">
              <form>
                <label>
                  <input type="text" name="cours" />
                  <p>Cohabitation passées</p>
                </label>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <form>
                <label>
                  <input type="text" name="date de debut" />
                  <p>Date de début: jj/mm/aa</p>
                </label>
              </form>
            </div>
            <div className="col-3">
              <form>
                <label>
                  <input type="text" name="fin de cohabitation" />
                  <p>Fin de cohabitation: jj/mm/aa</p>
                </label>
              </form>
            </div>
            <div className="col-3">
              <div className="col-3">
                <textarea></textarea>
                <p>Commentaire</p>
              </div>
            </div>
          </div>
          <input type="submit" value="Envoyer le formulaire"></input>
        </div>
      </div>
    </div>
  );
};

export default Hebergement;
