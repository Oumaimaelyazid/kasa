import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import logements from "../data/logements.json";
import Rating from "../components/Rating";
import Tags from "../components/Tags";

const DetailsAppart = () => {
  const { id } = useParams();

  // Rechercher le logement correspondant dans le fichier JSON.
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <p>Logement introuvable</p>;
  }
  // État pour gérer les collapses ouverts

  return (
    <div className="container">
      {/* Affichage du composant Slideshow avec les images */}
      <Slideshow images={logement.pictures} />

      {/* Informations supplémentaires sur le logement */}
      <div className="header-container">
        <div className="details-header">
          <h1 className="details-title">{logement.title}</h1>
          <p className="details-location">{logement.location}</p>
          <div className="details-tags">
            <Tags tags={logement.tags} />
          </div>
        </div>

        <div className="hote-container">
          <div className="hote">
            <p>{logement.host.name}</p>
            <img
              className="host-avatar"
              src={logement.host.picture}
              alt={`Photo de ${logement.host.name}`}
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>

      {/* Utilisation du composant Collapse pour Description et Equipements */}
      <div className="collapse-container">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Equipements"
          content={logement.equipments.join(", ")}
        />
      </div>
    </div>
  );
};

export default DetailsAppart;
