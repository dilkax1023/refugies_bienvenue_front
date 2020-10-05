import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import PageBeneficiaires from "./pages/beneficiaires/PageBeneficiaires";
import Hebergement from "./pages/hebergement/Hebergement";
import RdvDeSuivi from "./pages/rdv/RdvDeSuivi";

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/beneficiary" component={PageBeneficiaires} />
            <Route path="/hebergement" component={Hebergement} />
            <Route path="/rdv" component={RdvDeSuivi} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
