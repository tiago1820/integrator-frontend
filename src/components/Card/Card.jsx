import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../Redux/Actions/actions";

import styles from './Card.module.css';

let { card, btn, nameStyle, data, imageStyle } = styles;

const Card = ({ name, species, gender, image, id, onClose }) => {
    const [isFav, setIsFav] = useState(false);
    const dispatch = useDispatch();
    const myFav = useSelector(state => state.myFavorite);

    useEffect(() => {
        myFav.forEach((fav) => {
            if (fav.id === id) {
                setIsFav(true);
            }
        })
    }, [myFav]);


    const handleFavorite = () => {
        if (isFav) {
            dispatch(removeFav(id));// El orden importa
            setIsFav(false);
        } else {
            const myNewChar = {
                id,
                name,
                species,
                gender,
                image
            }

            dispatch(addFav(myNewChar));// El orden importa
            setIsFav(true);
        }
    }

    return (
        <div className={card}>
            {
                isFav ? (<button onClick={handleFavorite}>❤️</button>) :
                    (<button onClick={handleFavorite}>🤍</button>)
            }


            {/* <button onClick={() => onClose(id)} className={btn} >X</button> */}
            <Link to={`/detail/${id}`}><h2 className={nameStyle}>{name}</h2></Link>
            <h2 className={data}>{species}</h2>
            <h2>{gender}</h2>
            <img src={image} alt="" className={imageStyle} />
        </div >
    )
}

export default Card;