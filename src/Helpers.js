// Helpers for onClose function
const isNotMatchingID = (char, id) => {
    return char.id !== Number(id);
}

export const filterCharacters = (characters, id) => {
    return characters.filter((char) => {
        return isNotMatchingID(char, id);
    });
}

// Helpers for onSearch
export const handleCharacterData = (data, characters, setCharacters) => {
    if (data.name) {
        const isDuplicate = characters.some(char => char.id === data.id);

        if(!isDuplicate) {
            setCharacters(oldChars => [...oldChars, data]);
        } else {
            window.alert('¡El personaje ya está en la lista!');
        }
    } else {
        window.alert('¡No hay personajes con este ID!');
    }
}