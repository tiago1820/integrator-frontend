import { useTranslation } from 'react-i18next';
import styles from './FlagSelector.module.css';

export const FlagSelector = () => {
    const { i18n } = useTranslation();

    const handleChangeLanguage = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <select className={styles.languageSelector} onChange={handleChangeLanguage} value={i18n.language}>
            <option value="en">🇺🇸</option>
            <option value="es">🇪🇸</option>
            <option value="pt">🇧🇷</option>
        </select>
    );
};