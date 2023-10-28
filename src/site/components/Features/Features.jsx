import styles from './Features.module.css';
import { FaHeart, FaGlobe } from 'react-icons/fa';

export const Features = () => {
    return <section className={styles.features}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={`${styles.column} ${styles.featureBox}`}>
                    <i className={styles.icon}><FaHeart /></i>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className={`${styles.column} ${styles.featureBox}`}>
                    <i className={styles.icon}><FaGlobe /></i>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className={`${styles.column} ${styles.featureBox}`}>
                    <i className={styles.icon}><FaGlobe /></i>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </div>
    </section>
}