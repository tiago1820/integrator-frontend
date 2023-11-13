import axios from "axios";
import { handleErrors } from "../helpers";
import { URL } from "../constants";
const API_URL = URL;

export const getCharacterByPage = async (page) => {
    try {
        const { data } = await axios(`${API_URL}character/page/${page}`);
        return data;
    } catch (error) {
        handleErrors(error);
    }
}

export const getCharacterById = async (id) => {
    try {
        const { data } = await axios(`${API_URL}character/${id}`);
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