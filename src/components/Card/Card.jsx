import styles from './Card.module.css';

export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props;

   return (
      <a className={styles.link} href="#">
         <div className={styles.card}>
            {/* <button onClick={onClose}>X</button> */}
            <img className={styles.image} src={image} alt='' />
            <div className={styles.cardContent}>
               <div className={styles.name}>{name}</div>
               <div>
                  <div>{species}</div>
                  <div>{gender}</div>
                  <div className={styles.origin}>{origin}</div>
               </div>
            </div>


         </div>
         <div className={styles.status}>{status}</div>
      </a>
   );
}
