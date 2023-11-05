import { Card } from '../../components';
import styles from './Cards.module.css';

export const Cards = (props) => {
   const { characters, allChars, onClose } = props;
   // const charsToUse = characters.length > 0 ? characters : allChars;
   const charsToUse = characters.length > 0 ? characters.slice(0, 10) : allChars.slice(0, 10);

   return (
      <div className={styles.container}>
         <div className={styles.column}>
            <div className={styles.row}>
               {charsToUse.map((char) => {
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