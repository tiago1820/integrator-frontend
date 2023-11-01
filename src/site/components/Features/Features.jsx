import styles from './Features.module.css';
import { FaSearch, FaFilter, FaHeart, FaMousePointer } from 'react-icons/fa';

export const Features = () => {
    return <section id='features' className={styles.features}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={`${styles.column} ${styles.featureBox}`}>
                    <i className={styles.icon}><FaSearch /></i>
                    <h3>Exploración de Personajes:</h3>
                    <p>Permite a los usuarios explorar una amplia variedad de personajes del universo de Rick and Morty, con detalles como nombres, especies, estatus vital, etc.</p>
                </div>
                <div className={`${styles.column} ${styles.featureBox}`}>
                    <i className={styles.icon}><FaFilter /></i>
                    <h3>Búsqueda Avanzada:</h3>
                    <p>Ofrece a los usuarios la posibilidad de realizar búsquedas avanzadas para encontrar personajes, episodios o ubicaciones específicos según diferentes criterios (por ejemplo, nombre, temporada, etc.).</p>
                </div>
                <div className={`${styles.column} ${styles.featureBox}`}>
                    <i className={styles.icon}><FaHeart /></i>
                    <h3>Favoritos:</h3>
                    <p>Permite a los usuarios guardar sus personajes favoritos en una lista personalizada para acceder fácilmente en el futuro.</p>
                </div>
                <div className={`${styles.column} ${styles.featureBox}`}>
                    <i className={styles.icon}><FaMousePointer /></i>
                    <h3>Diseño Intuitivo y Navegación Sencilla:</h3>
                    <p>Asegúrate de que la interfaz de usuario sea fácil de usar y que la navegación sea intuitiva para que los usuarios puedan acceder rápidamente a la información que están buscando.</p>
                </div>
            </div>
        </div>
    </section>
}