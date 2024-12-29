import React from "react";
import Banniere from "../components/Banniere";

function BanniereComponent({ image, title }) {
    return (
        <div 
        className="banniere"
        style={{backgroundImage: `url(${image})`}}
        >
          <h1 className="banniere-title">{title}</h1>
          </div>
    );
}
export default BanniereComponent;