import styles from './RandomButton.module.css';
import { useTranslation } from 'react-i18next';


export const RandomButton = (props) => {
    const { t } = useTranslation();

    const { getRandomChar } = props;

    return (
        <button className={styles.RandomButton} onClick={() => getRandomChar()}>
            {t('random')}
        </button>
    )
}