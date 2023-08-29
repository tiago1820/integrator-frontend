import React from "react";
import styles from './Card.module.css';
let { card, btn, nameStyle, data, imageStyle } = styles;

const Card = ({ name, species, gender, image, onClose }) => {
    return (
        <div className={card}>
            <button className={btn} onClick={onClose}>X</button>
            <h2 className={nameStyle}>{name}</h2>
            <h2 className={data}>{species}</h2>
            <h2>{gender}</h2>
            <img className={imageStyle} src={image} alt="" />
        </div>
    )
}

export default Card;