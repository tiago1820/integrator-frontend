import { useTranslation } from 'react-i18next';

export const RandomButton = (props) => {
    const { t } = useTranslation();

    const { getRandomChar } = props;

    return (
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-1" onClick={() => getRandomChar()}>
            {t('random')}
        </button>
    )
}