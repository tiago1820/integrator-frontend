import styles from './Menu.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

export const Menu = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle(`${styles.responsiveNav}`);
    }

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.left}>
                    <a className={styles.appName} href="#">Logo</a>
                </div>

                <div className={styles.column}>
                    <nav ref={navRef} className={styles.right}>
                        <li >
                            <a className={styles.navLink} href="">Home</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="">Features</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="">Clientes</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="">Precios</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="">Contacto</a>
                        </li>
                        <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showNavBar}>
                            <FaTimes />
                        </button>
                    </nav>
                    <button className={styles.navBtn} onClick={showNavBar}>
                        <FaBars />
                    </button>
                </div>

            </nav>
        </>
    )
}