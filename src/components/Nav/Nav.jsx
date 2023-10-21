import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
import PATHROUTES from '../../helpers/PathRoutes.helper';
import styles from "./Nav.module.css";

const Nav = (props) => {
    const { onSearch } = props;
    const { HOME, ABOUT, FAVORITES } = PATHROUTES;

    return (
        <div className={styles.navContainer}>
            {/* Experimentar el Navlink */}
            <Link className={styles.navLink} to={HOME}>Home</Link>
            <Link className={styles.navLink} to={ABOUT}>About</Link>
            <Link className={styles.navLink} to={FAVORITES}>Favorites</Link>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;