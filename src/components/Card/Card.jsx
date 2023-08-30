import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import styles from './Card.module.css';

let { card, btn, nameStyle, data, imageStyle } = styles;

const Card = ({ name, species, gender, image, id, onClose }) => {

    return (
        <div className={card}>
            <button onClick={() => onClose(id)} className={btn} >X</button>
            <Link to={`/detail/${id}`}><h2 className={nameStyle}>{name}</h2></Link>
            <h2 className={data}>{species}</h2>
            <h2>{gender}</h2>
            <img src={image} alt="" className={imageStyle} />
        </div >
    )
}

export default Card;