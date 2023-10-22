import React, { useState, useEffect } from 'react';
import { Nav } from './components';
import { characterService, login, AppRoutes } from './services'
import styles from "./App.module.css";
import { useLocationPathname, useCharactersState, useAccessState, useNavigateFunction } from '../src/constants/consts';

function App() {
    const pathname = useLocationPathname();
    const [characters, setCharacters] = useCharactersState();
    const [access, setAccess] = useAccessState();
    const navigate = useNavigateFunction();

    const handleLogin = async (userData) => {
        try {
            await login(userData, setAccess, navigate);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        !access && navigate('/');
    }, [access]);

    const onSearch = async (id) => {
        try {
            const data = await characterService.getCharacterById(id);
            data.name
                ? setCharacters((oldChars) => [...oldChars, data])
                : window.alert('¡No hay personajes con este ID!');

        } catch (error) {
            console.log(error);
        }
    }

    const onClose = (id) => {
        setCharacters(
            characters.filter((char) => {
                return char.id !== id;
            })
        )
    }

    let navComponent = null;
    if (pathname !== '/') {
        navComponent = <Nav onSearch={onSearch} />;
    }

    return (
        <div className={styles.appContainer}>
            {navComponent}
            <AppRoutes characters={characters} onClose={onClose} handleLogin={handleLogin} />
        </div>
    );
}

export default App;