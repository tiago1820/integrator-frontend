import { ADD_FAV, REMOVE_FAV, SET_TOTAL_CHAR, SET_USER, REMOVE_USER, ORDER, FILTER, SHOW_ALL, GET_CHARACTER_DETAIL, CLEAN_DETAIL, GET_FAVS } from "./action-types";
import axios from "axios";

export const getFavs = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/rickandmorty/favs`);
            dispatch({ type: GET_FAVS, payload: response.data });
        } catch (error) {
            console.error('Error al obtener favoritos:', error);
        }
    }
}

export const addFav = (character) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:3001/rickandmorty/fav", character);
            return dispatch({ type: ADD_FAV, payload: response.data });

        } catch (error) {
            console.error('Error al agregar el favorito:', error);
        }
    }
}

export const removeFav = (uid) => {
    console.log("UID", uid)
    return async (dispatch) => {
        try {
            const response = await axios.delete("http://localhost:3001/rickandmorty/fav/" + uid);
            return dispatch({ type: REMOVE_FAV, payload: response.data });
        } catch (error) {
            console.error('Error al eliminar el favorito:', error);
        }
    }

}

export const setTotalChar = (total) => {
    return {
        type: SET_TOTAL_CHAR,
        payload: total
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const showAllcharacters = () => {
    return {
        type: SHOW_ALL,
    }
}

export const getCharacterDetail = (id) => {
    return function (dispatch) {
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
            .then((response) => response.json())
            .then(data => {
                dispatch({ type: GET_CHARACTER_DETAIL, payload: data })
            })
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
}