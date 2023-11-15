import styles from './Prices.module.css';
import { useTranslation } from 'react-i18next';


export const Prices = () => {
    const { t } = useTranslation();


    return <section id='prices' className={styles.price}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.title}>
                    <h1>{t('site_prices1')}</h1>
                    <p>{t('site_prices2')}</p>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}><h1>Free</h1></div>                            <div className={styles.cardBody}>
                            <h2>$ 0,00</h2>
                            <p>{t('site_prices3')}</p>
                            <p>{t('site_prices4')}</p>
                            <button className={styles.btn}>{t('site_prices9')}</button>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}><h1>Pro</h1></div>
                        <div className={styles.cardBody}>
                            <h2 className={styles.textMuted}>$ 4,99</h2>
                            <p>{t('site_prices5')}</p>
                            <p>{t('site_prices6')}</p>
                            <button className={styles.btn}>{t('site_prices9')}</button>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}><h1>Premium</h1></div>
                        <div className={styles.cardBody}>
                            <h2 className={styles.textMuted}>$ 9,99</h2>
                            <p>{t('site_prices7')}</p>
                            <p>{t('site_prices8')}</p>
                            <button className={styles.btn}>{t('site_prices9')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};