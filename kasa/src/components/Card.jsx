import React from "react";
import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <div className="card">
      <Link className="link" to={`/details-appart/${logement.id}`}>
        <img src={logement.cover} alt={logement.title} />
        <h3 className="card-title">{logement.title}</h3>
      </Link>
    </div>
  );
};

export default Card;
