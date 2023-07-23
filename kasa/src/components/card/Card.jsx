import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/Logement/${id}`} className="card">
      <img className="image" src={cover} alt={title} />
      <p className="titre">{title}</p>
    </Link>
  );
};

export default Card;
