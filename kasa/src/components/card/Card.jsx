import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className={id}>
      <img className={cover} src={cover} alt={title} />
      <h2 className={title}>{title}</h2>
    </Link>
  );
};

export default Card;
