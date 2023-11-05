import axios from "axios";
import { handleErrors } from "../helpers";

export const getCharacterById = async (id) => {
    try {
        const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        return data;
    } catch (error) {
        handleErrors(error);
    }
}

export const getRandomCharId = (totalChar) => {
    return Math.floor(Math.random() * totalChar);
};

export const isCharacterDuplicate = (character, id) => {
    return character.some(char => char.id === id);
};

export const getAllCharacters = async () => {
    try {
        const { data } = await axios.get(`http://localhost:3001/rickandmorty/characters`);
        console.log(data);
        return data;
    } catch (error) {
        handleErrors(error);
    }
}