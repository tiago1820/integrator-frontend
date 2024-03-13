import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes.helper';
import { RandomButton, LanguageSelector } from '../../components';
import { useTranslation } from 'react-i18next';
import { FaUser } from 'react-icons/fa';
import logo from '../../../../public/images/logo-app.png';
import { FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { useRef } from 'react';

export const Nav = (props) => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle(`${styles.responsiveNav}`);
    }

    const { t } = useTranslation();
    const { getRandomChar, user, handleLogout } = props;
    const { HOME, ABOUT, FAVORITES, LOGIN } = PATHROUTES;

    return (
        <nav className='bg-gray-800'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                    <div className='flex'>
                        <div className='flex-shrink-0 flex items-center'>
                            <Link to={HOME} onClick={showNavBar}>
                                <img className="h-8 w-auto" src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                            <Link to={HOME} className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium mt-4'
                                onClick={showNavBar}
                            >
                                {t('home')}
                            </Link>
                            <Link to={ABOUT} className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium mt-4'
                                onClick={showNavBar}
                            >
                                {t('about')}
                            </Link>
                            <Link to={FAVORITES} className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium mt-4' onClick={showNavBar}>
                                {t('favorites')}
                            </Link>
                            <RandomButton getRandomChar={getRandomChar} />
                            <LanguageSelector />
                        </div>
                    </div>
                    <div className='hidden sm:flex sm:items-center sm:ml-6'>
                        <div className='flex-shrink-0'>
                            <span className='text-gray-300'>{user?.email}</span>
                        </div>
                        <div className='ml-3 relative'>
                            <button className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium' onClick={handleLogout}>
                                <FaSignOutAlt className='h-6 w-6' />
                            </button>
                        </div>
                    </div>
                    <div className='-mr-2 flex items-center sm:hidden'>
                        <button type='button' className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                            onClick={handleLogout}
                        >
                            <FaBars className='h-6 w-6' />

                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}