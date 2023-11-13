import { Link } from 'react-router-dom';
import styles from './FavCard.module.css';
import { removeFav } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import SweetAlert from "react-bootstrap-sweetalert";
import { useState } from 'react';


export const FavCard = (props) => {
    const dispatch = useDispatch();
    const {uid, name, status, species, gender, origin, image, onClose } = props;
    const user = useSelector(state => state.user);
    const [confirm, setConfirm] = useState(false);


    const userId = parseInt(user.id, 10);

    const handleFavorite = () => {
        dispatch(removeFav(userId, uid));
        setConfirm(false);
    }

    const confirmDeleteFav = (uid) => {
        setConfirm(true);
    }

    // useEffect(() => {
    //     myFavorites.forEach((fav) => {
    //         if (fav.uid === props.id) {
    //             setIsFav(true);
    //         }
    //     });
    // }, [myFavorites]);

    return (
        <div className={styles.link}>
            <div className={styles.card}>
                {<button className={styles.heartButton} onClick={confirmDeleteFav}>❤️</button>}

                {<button className={styles.closeButton} onClick={() => onClose(uid)}>X</button>}

                <img
                    className={`${styles.image} ${status === 'Dead' ? styles.blackAndWhite : ''}`}
                    src={image}
                    alt=''
                />

                <div className={styles.cardContent}>
                    <Link to={`/app/detail/${uid}`}>
                        <button className={styles.charId}>{uid}</button>
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
            {confirm ?
                <SweetAlert
                    warning
                    showCancel
                    showCloseButton
                    confirmBtnText="Sí"
                    confirmBtnBsStyle="danger"
                    cancelBtnText="No"
                    cancelBtnBsStyle="light"
                    title="Excluir"
                    onConfirm={() => handleFavorite()}
                    onCancel={() => setConfirm(false)} 
                    reverseButtons={true}
                >
                    ¿Quieres eliminar el card seleccionado?
                </SweetAlert> : null
            }
        </div>
        
    );
}