export const addFav = (character) => {
    return {
        type: "ADD_FAV",
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: "REMOVE_FAV",
        payload: id
    }
}

export const setTotalChar = (total) => {
    return {
        type: "SET_TOTAL_CHAR",
        payload: total
    }
}

export const setUser = (user) => {
    return {
        type: "SET_USER",
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: "REMOVE_USER",
    }
}