import axios from "axios";

const getCharacterById = async (id) => {
    try {
        const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        return data;
    } catch (error) {
        throw error;
    }
}

export default { getCharacterById };