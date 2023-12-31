import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes.helper';
import { RandomButton, LanguageSelector } from '../../components';
import { useTranslation } from 'react-i18next';
import styles from "./Nav.module.css";
import { FaUser } from 'react-icons/fa';
import logo from '../../../../public/images/logo-app.png';
import { FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { useRef } from 'react';

export const Nav = (props) => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle(`${styles.responsiveNav}`);
    }

    const { t } = useTranslation();
    const { getRandomChar, user, handleLogout } = props;
    const { HOME, ABOUT, FAVORITES, LOGIN } = PATHROUTES;

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.left}>
                    <Link className={styles.appName} onClick={showNavBar} to={HOME}>
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                <div className={styles.column}>
                    <nav ref={navRef} className={styles.right}>
                        <li >
                            <Link className={styles.navLink} onClick={showNavBar} to={HOME}>{t('home')}</Link>
                        </li>
                        <li>
                            <Link className={styles.navLink} onClick={showNavBar} to={ABOUT}>{t('about')}</Link>
                        </li>
                        <li>
                            <Link className={styles.navLink} onClick={showNavBar} to={FAVORITES}>{t('favorites')}</Link>
                        </li>
                        <li className={styles.liButton}>
                            <RandomButton getRandomChar={getRandomChar} />
                        </li>
                        <li>
                            <LanguageSelector />
                        </li>
                        <li>
                            <div className={styles.userInfo}>
                                <span>{user?.email}</span>
                                <FaUser className={styles.userIcon} />
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link onClick={handleLogout} to={LOGIN}>
                                    <FaSignOutAlt className={styles.logoutIcon} />
                                </Link>
                            </div>
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