import React from "react";
import filledStars from "../assets/star-active.png"; 
import emptyStars from "../assets/star_inactive.png";   


const Rating = ({rating}) => {
    const stars = [];


    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<img key={i} src={filledStars} alt="etoile pleine"/>);
        } else {
            stars.push(<img key={i} src={emptyStars} alt="etoile vide"/>);
            
        }
        }
        return <div className="rating">{stars}</div>
    };
export default Rating