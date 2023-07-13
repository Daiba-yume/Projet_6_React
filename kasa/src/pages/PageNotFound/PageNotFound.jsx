import React from "react";
import { Link } from "react-router-dom";
import "../PageNotFound/PageNotFound.scss";

/* defini le component directement en tant qu'expression et rendu plus lisible*/
const PageNotFound = () => {
  return (
    <div>
      <h2>404</h2>
      <p> Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/"> Retourner sur la page d'accueil </Link>
    </div>
  );
};

export default PageNotFound;
