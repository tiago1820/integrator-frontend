import styles from './Menu.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import logo from '../../../../public/images/logo.png';

export const Menu = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle(`${styles.responsiveNav}`);
    }

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.left}>
                    <a className={styles.appName} href="/#">
                        <img src={logo} alt="Logo"/>
                    </a>
                </div>

                <div className={styles.column}>
                    <nav ref={navRef} className={styles.right}>
                        <li >
                            <a className={styles.navLink} href="#banner">Home</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#features">Features</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#testimonials">Clientes</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#prices">Precios</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#footer">Contacto</a>
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