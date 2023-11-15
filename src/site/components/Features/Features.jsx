import styles from './Features.module.css';
import { FaSearch, FaFilter, FaHeart, FaMousePointer } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


export const Features = () => {
    const { t } = useTranslation();

    return <section id='features' className={styles.features}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={`${styles.column} ${styles.featureBox}`}>
                    <i className={styles.icon}><FaSearch /></i>
                    <h3>{t('site_features1')}</h3>
                    <p>{t('site_features2')}</p>
                </div>
                <div className={`${styles.column} ${styles.featureBox}`}>
                    <i className={styles.icon}><FaFilter /></i>
                    <h3>{t('site_features3')}</h3>
                    <p>{t('site_features4')}</p>
                </div>
                <div className={`${styles.column} ${styles.featureBox}`}>
                    <i className={styles.icon}><FaHeart /></i>
                    <h3>{t('site_features5')}</h3>
                    <p>{t('site_features6')}</p>
                </div>
                <div className={`${styles.column} ${styles.featureBox}`}>
                    <i className={styles.icon}><FaMousePointer /></i>
                    <h3>{t('site_features7')}</h3>
                    <p>{t('site_features8')}</p>
                </div>
            </div>
        </div>
    </section>
}