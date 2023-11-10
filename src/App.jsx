import { useEffect } from 'react';
import { Nav, SearchBar } from '../src/app/components';
import { getCharacterById, getRandomCharId, login, register, AppRoutes, isCharacterDuplicate, getCharacterByPage } from '../src/app/services';
import styles from "./App.module.css";
import { useLocationPathname, useCharactersState, useAccessState, useNavigateFunction, useTotalChar, useUser, useCharsByPage } from '../src/app/hooks';
import { handleErrors } from '../src/app/helpers';


export const App = () => {

    const [pageCharacters, setPageCharacters] = useCharsByPage();


    const totalChar = useTotalChar();
    const pathname = useLocationPathname();
    const [characters, setCharacters] = useCharactersState();
    console.log("Chars",characters);


    const [access, setAccess] = useAccessState();
    const [user, setUser] = useUser();
    const navigate = useNavigateFunction();

    const handleLogin = async (userData) => {
        try {
            await login(userData, setAccess, setUser, navigate);
        } catch (error) {
            handleErrors(error);
        }
    }

    const handleRegister = async (userData) => {
        try {
            await register(userData, setAccess, setUser, navigate);
        } catch (error) {
            handleErrors(error);
        }
    }

    useEffect(() => {
        if (access && user && pathname !== '/') {
            navigate('/app/home')
        }

    }, [access]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const page = 1;
                const charactersData = await getCharacterByPage(page);
                setPageCharacters(charactersData);
            } catch (error) {
                handleErrors(error);
            }
        };

        fetchCharacters();
    }, []);

    const onSearch = async (id) => {
        try {
            const data = await getCharacterById(id);
            if (data.name) {
                setPageCharacters([]);
                const isDuplicate = isCharacterDuplicate(characters, data.id);
                !isDuplicate
                    ? setCharacters(oldChars => [...oldChars, data])
                    : window.alert('¡El personaje ya está en la lista!');
            } else {
                window.alert('¡No hay personajes con este ID!');
            }

        } catch (error) {
            handleErrors(error);
        }
    }

    const onClose = (id) => {
        setCharacters(
            characters.filter((char) => {
                return char.id !== id;
            })
        )
    }

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
        navComponent = <Nav onSearch={onSearch} getRandomChar={getRandomChar} user={user} />;
    }

    if (pathname === '/app/home') {
        searchBarComponent = <SearchBar onSearch={onSearch} />
    }

    return (
        <div className={styles.appContainer}>
            {navComponent}
            {searchBarComponent}
            <AppRoutes characters={characters.concat(pageCharacters)} onClose={onClose} handleLogin={handleLogin} handleRegister={handleRegister} />
        </div>
    );
}