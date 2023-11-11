import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Card = (props) => {
    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites);
    const { id, uid, name, status, species, gender, origin, image, onClose } = props;
    const [isFav, setIsFav] = useState(false);
    const user = useSelector(state => state.user);
     


    const handleFavorite = () => {
        isFav ? dispatch(removeFav(user.id, id)) : dispatch(addFav(user.id, props));
        setIsFav(!isFav);
    }

    useEffect(() => {
        myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
                setIsFav(true);
            }
        });
    }, [myFavorites]);

    return (
        <div className={styles.link}>
            <div className={styles.card}>
                {isFav
                    ? (<button className={styles.heartButton} onClick={handleFavorite}>❤️</button>)
                    : (<button className={styles.heartButton} onClick={handleFavorite}>🤍</button>)
                }

                {<button className={styles.closeButton} onClick={() => onClose(id)}>X</button>}

                <img
                    className={`${styles.image} ${status === 'Dead' ? styles.blackAndWhite : ''}`}
                    src={image}
                    alt=''
                />

                <div className={styles.cardContent}>
                    <Link to={`/app/detail/${id}`}>
                        <button className={styles.charId}>{id}</button>
                        <div className={styles.name}>{name}</div>
                    </Link>
                </div>

                <div className={`${styles.status} 
                ${status === 'Alive'
                        ? styles.aliveStatus
                        : styles.deadStatus}`
                }
                >{status}</div>

            </div>
        </div>
    );
}