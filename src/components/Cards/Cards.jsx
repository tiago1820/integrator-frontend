import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;

   return <div className={styles.container}>
      <div className={styles.column}>
         <div className={styles.row}>
            {characters.map((char) => {
               return (
                  <Card
                     key={char.id}
                     name={char.name}
                     status={char.status}
                     species={char.species}
                     gender={char.gender}
                     origin={char.origin.name}
                     image={char.image}
                     onClose={() => window.alert('Emulamos que se cierra la card')}
                  />
               )
            })}
         </div>
      </div>
   </div>
}
