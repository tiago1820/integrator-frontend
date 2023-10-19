import { useSelector } from "react-redux";
import { Card } from "../../components";
import styles from './Cards.module.css';

const Cards = (props) => {
   const { characters, onClose } = props;
   const userId = useSelector((state) => state.user.uid);
   console.log("USERID-CARDS",userId);

   return (
      <div className={styles.container}>
         <div className={styles.column}>
            <div className={styles.row}>
               {characters.map((char) => {
                  return (
                     <Card
                        key={char.id}
                        id={char.id}
                        userId={userId ? userId : null}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin?.name}
                        image={char.image}
                        onClose={onClose}
                     />
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Cards;