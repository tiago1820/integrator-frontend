import styles from './Banner.module.css';
import image from '../../../../public/images/banner.png';
import { Link } from 'react-router-dom';

export const Banner = () => {
    // const { LOGIN } = PATHROUTES;

    return <section id='banner' className={styles.banner}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <h1>Explora el universo de Rick and Morty con detalles impresionantes.</h1>
                    <Link className={styles.btn} to={"/app"}>Crear una cuenta</Link>
                    <Link className={styles.btn2} to={"/app"}>Ingresar</Link>
                </div>
                <div className={styles.column}>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    </section>
}