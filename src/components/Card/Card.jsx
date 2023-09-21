import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes.helper';
import styles from './Card.module.css';

const Card = (props) => {
   const { id, name, status, species, gender, origin, image, onClose } = props;
   const { DETAIL } = PATHROUTES;

   return (
      <div className={styles.link}>
         <div className={styles.card}>
            <button onClick={() => onClose(id)}>X</button>
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

export default Card;