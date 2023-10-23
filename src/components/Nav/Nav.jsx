import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes.helper';
import { RandomButton, SearchBar } from '../../components';

import styles from "./Nav.module.css";

export const Nav = (props) => {
    const { onSearch, getRandomChar } = props;
    const { HOME, ABOUT, FAVORITES } = PATHROUTES;

    return (
        <div className={styles.navContainer}>
            <Link className={styles.navLink} to={HOME}>Home</Link>
            <Link className={styles.navLink} to={ABOUT}>About</Link>
            <Link className={styles.navLink} to={FAVORITES}>Favorites</Link>
            <RandomButton getRandomChar={getRandomChar} />
            <SearchBar onSearch={onSearch} />
        </div>
    )
}