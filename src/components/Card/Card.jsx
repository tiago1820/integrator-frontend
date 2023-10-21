import { Link, useLocation } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes.helper';
import styles from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

const Card = (props) => {
   const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props;
   const { DETAIL, FAVORITES } = PATHROUTES;
   const { pathname } = useLocation();
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
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
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }

            {/* {pathname !== FAVORITES && <button onClick={() => onClose(id)}>X</button>} */}

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
         </div>
         <div className={styles.status}>{status}</div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);