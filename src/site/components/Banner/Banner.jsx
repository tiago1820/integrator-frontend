import styles from './Banner.module.css';
import image from '../../../../public/images/banner.png';

export const Banner = () => {
    return <section className={styles.banner}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                    <a className={styles.btn} href="#">Crear una cuenta</a>
                    <a className={styles.btn2} href="#">Ingresar</a>

                </div>

                <div className={styles.column}>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>

    </section>
}