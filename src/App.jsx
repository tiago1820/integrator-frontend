import { useEffect } from 'react';
import { Nav } from '../src/app/components';
import { getCharacterById, getRandomCharId, login, register, AppRoutes, isCharacterDuplicate } from '../src/app/services';
import styles from "./App.module.css";
import { useLocationPathname, useCharactersState, useAccessState, useNavigateFunction, useTotalChar, useUser } from '../src/app/hooks';
import { handleErrors } from '../src/app/helpers';


export const App = () => {
    const totalChar = useTotalChar();
    const pathname = useLocationPathname();
    const [characters, setCharacters] = useCharactersState();
    const [access, setAccess] = useAccessState();
    const [user, setUser] = useUser();
    const navigate = useNavigateFunction();

    console.log("HOLA", access);
    console.log("HELLO", user);

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
        if(access && user && pathname !== '/') {
            navigate('/app/home')
        } else {
            navigate('/app');
        }
        
    }, [access]);

    const onSearch = async (id) => {
        try {
            const data = await getCharacterById(id);
            if (data.name) {
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
        const randomCharId = getRandomCharId(totalChar);
        const randomCharData = await getCharacterById(randomCharId);
        randomCharData
            ? setCharacters(oldChars => [...oldChars, randomCharData])
            : window.alert('No hay personajes con este ID!');
    };

    let navComponent = null;
    if (pathname !== '/app' && pathname !== '/' && pathname !== '/app/register') {
        navComponent = <Nav onSearch={onSearch} getRandomChar={getRandomChar} user={user} />;
    }

    return (
        <div className={styles.appContainer}>
            {navComponent}
            <AppRoutes characters={characters} onClose={onClose} handleLogin={handleLogin} handleRegister={handleRegister} />
        </div>
    );
}