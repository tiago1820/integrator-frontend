import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes.helper';
import styles from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocationPathname } from '../../hooks/index';

export const Card = (props) => {
    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites);

    const { id, name, status, species, gender, origin, image, onClose } = props;
    const { FAVORITES } = PATHROUTES;
    const pathname = useLocationPathname();
    const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {
        isFav ? dispatch(removeFav(id)) : dispatch(addFav(props));
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
                    : (<button className={styles.heartButton} onClick={handleFavorite}>🤍</button>)}
                {pathname !== FAVORITES && <button className={styles.closeButton} onClick={() => onClose(id)}>X</button>}
                <button className={styles.charId}>{id}</button>

                <img className={styles.image} src={image} alt='' />
                <div className={styles.cardContent}>
                    <Link to={`/detail/${id}`}>
                        <div className={styles.name}>{name}</div>
                    </Link>
                    <div>
                        <div>{species}</div>
                        <div>{gender}</div>
                        <div className={styles.origin}>{origin}</div>
                    </div>
                </div>
                <div className={styles.status}>{status}</div>
            </div>
        </div>
    );
}