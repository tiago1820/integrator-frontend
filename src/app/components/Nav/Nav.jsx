import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes.helper';
import { RandomButton, SearchBar } from '../../components';
import { useTranslation } from 'react-i18next';
import styles from "./Nav.module.css";
import { FaUser } from 'react-icons/fa';
import logo from '../../../../public/images/logo.png';

export const Nav = (props) => {
    const { t } = useTranslation();
    const { onSearch, getRandomChar } = props;
    const { HOME, ABOUT, FAVORITES } = PATHROUTES;

    return (
        <div className={styles.navContainer}>
            <div className={styles.left}>
                <Link className={styles.appName} to={HOME}>
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            {/* <Link className={styles.navLink} to={HOME}>{t('home')}</Link> */}
            <Link className={styles.navLink} to={ABOUT}>{t('about')}</Link>
            <Link className={styles.navLink} to={FAVORITES}>{t('favorites')}</Link>
            <RandomButton getRandomChar={getRandomChar} />
            <SearchBar onSearch={onSearch} />
            <div className={styles.userInfo}>
                <span>tiago.zdo@gmail.com</span>
                <FaUser className={styles.userIcon} />
            </div>
        </div>
    )
}