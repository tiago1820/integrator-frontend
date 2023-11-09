import axios from "axios";
import { handleErrors } from "../helpers";

export const loadFavorites = () => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: 'LOAD_FAVORITES',
                payload: data,
            });
        } catch (error) {
            handleErrors(error);
        }
    }
}

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);
            return dispatch({
                type: 'ADD_FAV',
                payload: data,
            });

        } catch (error) {
            handleErrors(error);
        }
    }
};

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            return dispatch({
                type: 'REMOVE_FAV',
                payload: data,
            });
        } catch (error) {
            handleErrors(error);
        }
    }
}

export const filterCards = (gender) => {
    return {
        type: "FILTER",
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: "ORDER",
        payload: order
    }
}

export const showAllcharacters = () => {
    return {
        type: "SHOW_ALL",
    }
}

export const getCharacterDetail = (id) => {

    return function (dispatch) {
        fetch(`http://localhost:3001/rickandmorty/character/${id}`
        )
            .then((response) => response.json())
            .then(data => {
                dispatch({ type: "GET_CHARACTER_DETAIL", payload: data })
            })
    }
}

export const cleanDetail = () => {
    return { type: "CLEAN_DETAIL" };
}

export const getTotalChar = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/rickandmorty/character/total');
            const total = response.data.total;
            dispatch({
                type: 'GET_TOTAL_CHAR',
                payload: total,
            });
        } catch (error) {
            handleErrors(error);
        }
    }
};