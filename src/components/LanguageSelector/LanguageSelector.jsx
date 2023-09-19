import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSelector.module.css';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleChangeLanguage = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <select className={styles.languageSelector} onChange={handleChangeLanguage} value={i18n.language}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="pt">Português</option>
        </select>
    );
};

export default LanguageSelector;
