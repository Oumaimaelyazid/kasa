import React, { useState } from "react";
import arrowLeft from "../assets/arrow-back.png" ;
import arrowRight from "../assets/arrow-forward.png" ;



const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

 // Fonction pour aller à l'image précédente   
    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length -1 : currentIndex - 1);
    };
// Fonction pour aller à l'image suivante 
const goToNext =() => {
    setCurrentIndex(currentIndex === images.length -1 ? 0 : currentIndex + 1);
};
return (
    <div className="slideshow">
        {images.length > 0 && (
            <img
            className="slideshow-image"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex +1}`}
            />
        )}
            
     {/* Afficher les flèches seulement s'il y a plusieurs images */}  
     {images.length > 1 && (
        <>
        <button className="prev" onClick={goToPrevious}>
            <img src={arrowLeft} alt="Precedent"/>
        </button>
        <button className="next" onClick={goToNext}>
           <img src={arrowRight} alt="Suivant" />
        </button>
        </>
     )}  

     {/* Numérotation */}
     {images.length > 1 && (
        <div className="slide-number">
            {currentIndex + 1} / {images.length}
            </div>
     )}

    </div>
);
};

export default Slideshow ;
