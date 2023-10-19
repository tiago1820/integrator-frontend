// DEPENDENCIES AND HOOKS
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
// COMPONENTS
import { SearchBar, RandomButton } from "../../components";
//FILES
import PATHROUTES from '../../helpers/PathRoutes.helper';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import styles from './Nav.module.css';
import { useSelector } from 'react-redux';

const Nav = (props) => {

    const { t } = useTranslation();
    const { onSearch, getRandom, logout } = props;
    const { LOGIN, HOME, ABOUT, FAVORITES } = PATHROUTES;
    const { pathname } = useLocation();
    const user = useSelector((state) => state.user);

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle(`${styles.responsiveNav}`);
    }

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.left}>
                    <Link to={HOME} className={styles.appName} >Rick & Morty</Link>
                </div>

                <div className={styles.column}>
                    <div className={styles.userInfo}>
                        <div className={styles.userContainer}>
                            <p className={styles.userEmail}>{user?.email}</p>
                            <Link to={LOGIN} className={styles.logoutBtn} onClick={logout}>
                                <FaSignOutAlt />
                            </Link>
                        </div>
                    </div>

                    <nav ref={navRef} className={styles.right}>
                        {pathname !== HOME && <Link to={HOME} onClick={showNavBar} className={styles.navLink} >{t('home')}</Link>}
                        {pathname !== ABOUT && <Link to={ABOUT} onClick={showNavBar} className={styles.navLink} >{t('about')}</Link>}
                        {pathname !== FAVORITES && <Link to={FAVORITES} onClick={showNavBar} className={styles.navLink} >{t('favorites')}</Link>}
                        <RandomButton getRandom={getRandom} />
                        <LanguageSelector />
                        <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showNavBar}>
                            <FaTimes />
                        </button>
                    </nav>
                    <button className={styles.navBtn} onClick={showNavBar}>
                        <FaBars />
                    </button>
                </div>
            </nav>
            <div>
                {/* <h1 className={styles.characters}>{t('characters')}</h1> */}
                <div >
                    <SearchBar onSearch={onSearch} />
                </div>
            </div>
        </>
    )
}

export default Nav