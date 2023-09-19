import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import PATHROUTES from '../../helpers/PathRoutes.helper';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import styles from './Nav.module.css';

const Nav = (props) => {

    const { t } = useTranslation();
    const { onSearch, userCurrent } = props;
    const { LOGIN, HOME, ABOUT } = PATHROUTES;

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle(`${styles.responsiveNav}`);
    }

    return (
        <>
            <div >
                <nav className={styles.navbar}>
                    <div className={styles.container}>
                        <Link to={HOME} className={styles.brand}>
                            Rick & Morty
                            <span className={styles.wiki}> Wiki</span>
                        </Link>
                        <div className={styles.containerNav}>

                            <nav ref={navRef} className={styles.navbarNav}>
                                <div className={styles.userCurrent}>
                                    <p>{userCurrent}</p>
                                    <Link to={LOGIN}>Log Out</Link>
                                </div>
                                <Link to={HOME} onClick={showNavBar}>{t('characters')}</Link>
                                <Link to={HOME} onClick={showNavBar}>{t('episode')}</Link>
                                <Link to={HOME} onClick={showNavBar}>{t('location')}</Link>
                                <LanguageSelector />

                                <button onClick={showNavBar} className={`${styles.navBtn} ${styles.navCloseBtn}`}>
                                    <FaTimes />
                                </button>
                            </nav>
                            <button className={styles.navBtn} onClick={showNavBar}>
                                <FaBars />
                            </button>
                        </div>
                    </div>

                </nav>
            </div>
            <div>
                <h1 className={styles.characters}>{t('characters')}</h1>
                <div >
                    <SearchBar onSearch={onSearch} />
                </div>
            </div>
        </>
    )
}

export default Nav