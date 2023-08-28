import React from "react";

const Card = ({ name, species, gender, image, onClose }) => {
    return (
        <div>
            <button onClick={onClose}>X</button>
            <h2>{name}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <img src={image} alt="" />
        </div>
    )
}

export default Card;