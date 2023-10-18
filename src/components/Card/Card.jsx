// DEPENDENCIES AND HOOKS
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FaHeart } from 'react-icons/fa';

// FILES
import PATHROUTES from '../../helpers/PathRoutes.helper';
import { addFav, removeFav } from "../../redux/actions";
import styles from './Card.module.css';

const Card = (props) => {
   const { uid, id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props;
   const { DETAIL, FAVORITES } = PATHROUTES;
   const { pathname } = useLocation();
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(uid) : addFav(props);
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

            <div className={styles.idChar}>{id}</div>


            <img className={styles.image} src={image} alt='' />
            <div className={styles.cardContent}>
               <Link to={`/detail/${id}`}>
                  <div className={styles.name}>{name}</div>
               </Link>
            </div>
            
            <div className={styles.cardButtonsContainer}>
               {
                  isFav ? <div className={styles.favoriteBtn} onClick={handleFavorite}><FaHeart size={30} color='red' /></div> :
                     <div className={styles.favoriteBtn} onClick={handleFavorite}><FaHeart size={30} color='white' /></div>
               }

               <div className={styles.closeBtn} onClick={() => onClose(id)}>X</div>

            </div>
         </div>
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