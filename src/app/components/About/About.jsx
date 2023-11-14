import styles from "./About.module.css";
import { useTranslation } from 'react-i18next';


export const About = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutContainer}>
      <h2>{t('aboutTitle')}</h2>

      <p>{t('aboutP1')}</p>

      <p>{t('aboutP2')}</p>
    
      <p>{t('aboutP3')}</p>
    
      <p>{t('aboutP4')}</p>
    
      <p>Tiago Souza de Oliveira</p>
    </div>
  )
}