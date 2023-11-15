import { useEffect, useState } from 'react';
import { Nav, SearchBar, Pagination } from '../src/app/components';
import { getCharacterById, getRandomCharId, login, register, AppRoutes, isCharacterDuplicate, getCharacterByPage, logout } from '../src/app/services';
import styles from "./App.module.css";
import { useLocationPathname, useCharactersState, useAccessState, useNavigateFunction, useTotalChar, useUser, useCharsByPage } from '../src/app/hooks';
import { handleErrors } from '../src/app/helpers';
import { useDispatch } from 'react-redux';
import SweetAlert from "react-bootstrap-sweetalert";

export const App = () => {
    const dispatch = useDispatch();
    const [pageCharacters, setPageCharacters] = useCharsByPage();
    const [currentPage, setCurrentPage] = useState(1);
    const totalChar = useTotalChar();
    const pathname = useLocationPathname();
    const [characters, setCharacters] = useCharactersState();
    const [confirm, setConfirm] = useState({
        show: false,
        title: "",
    });


    const [access, setAccess] = useAccessState();
    const user = useUser();

    const navigate = useNavigateFunction();

    const handleLogin = async (userData) => {
        try {
            await login(userData, setAccess, navigate, dispatch);
        } catch (error) {
            throw error;
        }
    }

    const handleRegister = async (userData) => {
        try {
            await register(userData, setAccess, navigate, dispatch);
        } catch (error) {
            throw error;
        }
    }

    const handleLogout = async () => {
        try {
            await logout(dispatch);
        } catch (error) {
            handleErrors(error);
        }
    }


    useEffect(() => {
        if (access && user && pathname !== '/') {
            navigate('/app/home')
        } else if(!user) {
            navigate('/app')
        }

    }, [access]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                // const page = 1;
                const charactersData = await getCharacterByPage(currentPage);
                setPageCharacters(charactersData);
            } catch (error) {
                handleErrors(error);
            }
        };

        fetchCharacters();
    }, [currentPage]);

    const onSearch = async (id) => {
        try {
            const data = await getCharacterById(id);
            if (data.name) {
                setPageCharacters([]);
                const isDuplicate = isCharacterDuplicate(characters, data.id);
                if (!isDuplicate) {
                    setCharacters(oldChars => [...oldChars, data]);
                } else {
                    setConfirm({
                        show: true,
                        title: '¡El personaje ya está en la lista!',
                    });
                }

                // !isDuplicate
                //     ? setCharacters(oldChars => [...oldChars, data])
                //     : window.alert('¡El personaje ya está en la lista!');
            } else {
                setConfirm({
                    show: true,
                    title: '¡No hay personajes con este ID!',
                });
            }

        } catch (error) {
            handleErrors(error);
        }
    }

    const onClose = (id) => {
        setCharacters(oldChars =>
            oldChars.filter(char => char.id !== id)
        );
        // characters.filter((char) => {
        //     return char.id !== id;
        // })


        setPageCharacters(oldChars =>
            oldChars.filter(char => char.id !== id)
        );
    };

    const getRandomChar = async () => {
        try {
            setPageCharacters([]);
            const randomCharId = getRandomCharId(totalChar);
            const randomCharData = await getCharacterById(randomCharId);
            randomCharData
                ? setCharacters(oldChars => [...oldChars, randomCharData])
                : window.alert('No hay personajes con este ID!');
        } catch (error) {
            handleErrors(error);
        }
    };

    let navComponent = null;
    let searchBarComponent = null;
    if (pathname !== '/app' && pathname !== '/' && pathname !== '/app/register') {
        navComponent = <Nav onSearch={onSearch} getRandomChar={getRandomChar} user={user} handleLogout={handleLogout} />;
    }

    if (pathname === '/app/home') {
        searchBarComponent = <SearchBar onSearch={onSearch} />
    }

    const goToPage = page => {
        setCurrentPage(page);
    };

    const goToNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
    }

    return (
        <div className={styles.appContainer}>
            {navComponent}
            {searchBarComponent}
            <AppRoutes characters={characters.concat(pageCharacters)} onClose={onClose} handleLogin={handleLogin} handleRegister={handleRegister} />
            {pathname === '/app/home' && pageCharacters.length >= 5 && (
                <Pagination
                    currentPage={currentPage}
                    goToPreviousPage={goToPreviousPage}
                    goToNextPage={goToNextPage}
                    goToPage={goToPage}
                />
            )}
            <SweetAlert
                title={confirm.show ? confirm.title : ""}
                show={confirm.show}
                onConfirm={() => setConfirm({ show: false, title: confirm.title })}
                customClass={styles.customSweetAlert}
            // onCancel={this.onCancel}
            />

        </div>
    );


}