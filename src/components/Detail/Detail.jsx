import useCharacter from '../../hooks/useCharacter';
import styles from './Detail.module.css';

const Detail = () => {
  const character = useCharacter();

  return (
    <div className={styles.link}>
      <div className={styles.card}>
        <img className={styles.image} src={character?.image} alt='' />
        <div className={styles.cardContent}>
          <div className={styles.name}>{character?.name}</div>
          <div>
            <div>{character?.species}</div>
            <div>{character?.gender}</div>
            <div className={styles.origin}>{character.origin?.name}</div>
          </div>
        </div>
      </div>
      <div className={styles.status}>{character?.status}</div>
    </div>
  )
}

export default Detail;
