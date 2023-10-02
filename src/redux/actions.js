import { ADD_FAV, REMOVE_FAV, SET_TOTAL_CHAR, SET_USER, REMOVE_USER, ORDER, FILTER, SHOW_ALL, GET_CHARACTER_DETAIL, CLEAN_DETAIL } from "./action-types";

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
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
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then(data => {
                dispatch({ type: GET_CHARACTER_DETAIL, payload: data })
            })
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
}