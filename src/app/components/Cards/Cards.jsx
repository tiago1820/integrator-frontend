import { Card } from '../../components';
import styles from './Cards.module.css';

export const Cards = (props) => {
   const { characters, onClose } = props;

   return (
      <div className={styles.container}>
         <div className={styles.column}>
            <div className={styles.row}>
               {characters.map((char) => {
                  return (
                     <Card
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin.name}
                        image={char.image}
                        onClose={onClose}
                     />
                  )
               })}
            </div>
         </div>
      </div>)
}