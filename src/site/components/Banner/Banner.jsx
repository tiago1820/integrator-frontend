import styles from './Banner.module.css';
import image from '../../../../public/images/banner.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Banner = () => {
    // const { LOGIN } = PATHROUTES;
    const { t } = useTranslation();

    return <section id='banner' className={styles.banner}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <h1>{t('site_banner1')}</h1>
                    <Link className={styles.btn} to={"/app/register"}>{t('site_banner2')}</Link>
                    <Link className={styles.btn2} to={"/app"}>{t('site_banner3')}</Link>
                </div>
                <div className={styles.column}>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    </section>
}