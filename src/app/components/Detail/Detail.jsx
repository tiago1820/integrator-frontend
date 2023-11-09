import { useCharacter } from '../../hooks';
import styles from './Detail.module.css';
import { useTranslation } from 'react-i18next';


export const Detail = () => {
  const { t } = useTranslation();
  const character = useCharacter();

  return (
    <div className={styles.link}>
      <div className={styles.card}>
        <img className={styles.image} src={character?.image} alt='' />
        <div className={styles.cardContent}>
          <div className={styles.name}>{character?.name}</div>
          <div>
            <div>{t('species')}: {character?.species}</div>
            <div>{t('gender')}: {character?.gender}</div>
            <div className={styles.origin}>{t('origin')}: {character.origin?.name}</div>
          </div>
        </div>
      </div>
      <div className={styles.status}>{t('status')}: {character?.status}</div>
    </div>
  )
}