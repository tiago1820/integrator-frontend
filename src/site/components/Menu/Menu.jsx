import styles from './Menu.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import logo from '../../../../public/images/logo.png';
import { FlagSelector } from './components/FlagSelector/FlagSelector';
import { useTranslation } from 'react-i18next';

export const Menu = () => {
    const { t } = useTranslation();
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle(`${styles.responsiveNav}`);
    }

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.left}>
                    <a className={styles.appName} href="/#">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>

                <div className={styles.column}>
                    <nav ref={navRef} className={styles.right}>
                        <li >
                            <a className={styles.navLink} href="#banner">{t('site_nav1')}</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#features">{t('site_nav2')}</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#testimonials">{t('site_nav3')}</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#prices">{t('site_nav4')}</a>
                        </li>
                        <li>
                            <a className={styles.navLink} href="#footer">{t('site_nav5')}</a>
                        </li>
                        <li>
                            <FlagSelector />
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