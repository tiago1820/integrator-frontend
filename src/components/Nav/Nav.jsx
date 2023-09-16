import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import PATHROUTES from '../../helpers/PathRoutes.helper';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Nav.module.css';

const Nav = (props) => {
    const { onSearch } = props;
    const { HOME, ABOUT } = PATHROUTES;

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
                                <Link to={HOME} onClick={showNavBar}>Characters</Link>
                                <Link to={HOME} onClick={showNavBar}>Episode</Link>
                                <Link to={HOME} onClick={showNavBar}>Location</Link>
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
                <h1 className={styles.characters}>Characters</h1>
                <div >
                    <SearchBar onSearch={onSearch} />
                </div>

                {/* <Link to={HOME}>Home</Link>
                    <Link to={ABOUT}>About</Link> */}
                {/* <SearchBar onSearch={onSearch} /> */}
            </div>

        </>
    )
}

export default Nav