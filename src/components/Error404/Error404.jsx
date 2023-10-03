import { useTranslation } from "react-i18next";
import error404 from "../../assets/images/error404.png";
import styles from "./Error404.module.css";
const Error404 = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2>{t('404h2')}</h2>
                <p>{t('404p')}</p>
            </div>
            <div className={styles.imgContainer}>
                <img src={error404} alt="404 error" />
            </div>
        </div>
    )
}

export default Error404;
