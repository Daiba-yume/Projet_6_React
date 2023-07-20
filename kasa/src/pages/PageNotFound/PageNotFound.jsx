import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/PageNotFound.scss";

function PageNotFound() {
  return (
    <div className={PageNotFound.notFound}>
      <h2 className={PageNotFound.title}>404</h2>
      <p className={PageNotFound.error}>
        {" "}
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={PageNotFound.link}>
        {" "}
        Retourner sur la page d'accueil{" "}
      </Link>
    </div>
  );
}

export default PageNotFound;
