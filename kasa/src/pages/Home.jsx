import React from "react";
import Banniere from "../components/Banniere";
import logements from "../data/logements.json";
import Card from "../components/Card";
import imgSrc from "../assets/IMG.png";

const Home = () => {
  const image = imgSrc;
  const title = "Chez vous, partout et ailleurs";

  return (
    <div className="home-container">
      <Banniere image={image} title={title} />

      <div className="rent">
        {logements.map((logement) => (
          <Card logement={logement} key={logement.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
