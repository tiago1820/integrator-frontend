import axios from "axios";

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
            console.log(error);
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
            console.log(error);
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