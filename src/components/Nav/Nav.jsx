// DEPENDENCIES AND HOOKS
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
// COMPONENTS
import SearchBar from '../SearchBar/SearchBar';
import RandomButton from '../RandomButtom/RandomButton';
//FILES
import PATHROUTES from '../../helpers/PathRoutes.helper';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import styles from './Nav.module.css';

const Nav = (props) => {

    const { t } = useTranslation();
    const { onSearch, userCurrent, getRandom } = props;
    const { LOGIN, HOME, ABOUT, FAVORITES } = PATHROUTES;
    const { pathname } = useLocation();

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
                            <p className={styles.userEmail}>{userCurrent}</p>
                            <Link to={LOGIN} className={styles.logoutBtn} >
                                <FaSignOutAlt />
                            </Link>
                        </div>
                    </div>

                    <nav ref={navRef} className={styles.right}>
                        {
                            pathname !== HOME && <Link to={HOME} onClick={showNavBar} className={styles.navLink} >{t('home')}</Link>
                        }
                        <Link to={HOME} onClick={showNavBar} className={styles.navLink} >{t('about')}</Link>
                        <Link to={FAVORITES} onClick={showNavBar} className={styles.navLink} >Favorites</Link>
                        <RandomButton getRandom={getRandom}/>
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