import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleChangeLanguage = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <select className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-1" onChange={handleChangeLanguage} value={i18n.language}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="pt">Português</option>
        </select>
    );
};