import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/layouts/Login";
import Home from "./components/layouts/Home";
import Contact from "./components/layouts/Contact";
import Beneficiaires from "./components/layouts/Beneficiaires";
import Hebergement from "./components/layouts/Hebergement";

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/beneficiaires" component={Beneficiaires} />
            <Route path="/hebergement" component={Hebergement} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
