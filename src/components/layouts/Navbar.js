import React from "react";
import "./Navbar.css";
import Button from "../core/Button";

const Navbar = () => {
  return (
    <div className="d-flex flex-column align-items-center w-100">
      <h2 className="text-center mb-5">Réfugies Bienvenu</h2>
      <Button path="/beneficiaires" name="BÉNÉFICIAIRE" />
      <Button path="/hebergement" name="HÉBERGEMENT" />
      <Button path="/rdv" name="RDV DE SUIVI" />
      <Button path="/contact" name="CONTACT" />
      <Button path="/stats" name="STATISTIQUES" />
      <Button path="/bilan" name="BILAN" />
      <Button path="/admin" name="ADMIN" />
    </div>
  );
};

export default Navbar;
