import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';
import ptTranslations from './locales/pt.json';

const resources = {
    en: { translation: enTranslations },
    es: { translation: esTranslations },
    pt: { translation: ptTranslations }
}

// Obtén el idioma del navegador del usuario
let userLanguage = navigator.language.split('-')[0];

if (!['en', 'es', 'pt'].includes(userLanguage)) {
    userLanguage = 'en';
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: userLanguage,
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n;