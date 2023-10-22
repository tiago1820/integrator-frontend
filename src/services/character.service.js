import axios from "axios";
import { handleErrors } from "../helpers";

const getCharacterById = async (id) => {
    try {
        const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        return data;
    } catch (error) {
        handleErrors(error);
    }
}

export default { getCharacterById };