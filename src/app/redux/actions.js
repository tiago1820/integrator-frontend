import {
    ADD_FAV,
    REMOVE_FAV,
    LOAD_FAVORITES,
    FILTER,
    ORDER,
    SHOW_ALL,
    GET_CHARACTER_DETAIL,
    CLEAN_DETAIL,
    GET_TOTAL_CHAR,
    SET_USER,
    REMOVE_USER
} from './action-types';
import axios from "axios";
import { handleErrors } from "../helpers";
import { URL } from "../constants";

const API_URL = URL;

export const loadFavorites = (userId) => {

    const endpoint = `${API_URL}fav/${userId}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: LOAD_FAVORITES,
                payload: data,
            });
        } catch (error) {
            handleErrors(error);
        }
    }
}

export const addFav = (userId, character) => {

    const endpoint = `${API_URL}fav/${userId}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });

        } catch (error) {
            handleErrors(error);
        }
    }
};

export const removeFav = (userId, uid) => {
    const endpoint = `${API_URL}fav/${userId}/${uid}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            handleErrors(error);
        }
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
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

export const showAllcharacters = () => {
    return {
        type: SHOW_ALL,
    }
}

export const getCharacterDetail = (id) => {

    return function (dispatch) {
        fetch(`${API_URL}character/${id}`
        )
            .then((response) => response.json())
            .then(data => {
                dispatch({ type: GET_CHARACTER_DETAIL, payload: data })
            })
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
}

export const getTotalChar = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${API_URL}character/total`);
            const total = response.data.total;
            dispatch({
                type: GET_TOTAL_CHAR,
                payload: total,
            });
        } catch (error) {
            handleErrors(error);
        }
    }
};