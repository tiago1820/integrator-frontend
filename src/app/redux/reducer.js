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

const initialState = {
    myFavorites: [],
    allCharacters: [],
    characterDetail: {},
    totalCharacters: null,
    user: null,
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };

        case REMOVE_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };

        case LOAD_FAVORITES:
            return {
                ...state, myFavorites: payload, allCharacters: payload
            };

        case FILTER:
            let copy3 = state.allCharacters.filter((char) => char.gender === payload)
            return {
                ...state,
                myFavorites: copy3
            }

        case ORDER:
            let copy4 = [...state.allCharacters].sort((a, b) => {
                if (payload === "A") {
                    return a.uid - b.uid
                } else if (payload === "D") {
                    return b.uid - a.uid
                } else {
                    return 0;
                }
            })
            return {
                ...state,
                myFavorites: copy4
            }

        case SHOW_ALL:
            return {
                ...state,
                myFavorites: state.allCharacters
            }

        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: payload
            }

        case CLEAN_DETAIL:
            return {
                ...state,
                characterDetail: {},
            };

        case GET_TOTAL_CHAR:
            return {
                ...state,
                totalCharacters: payload,
            };

        case SET_USER:
            return {
                ...state,
                user: payload,
            }

        case REMOVE_USER:
            return {
                ...state, user: null
            }

        default:
            return {
                ...state
            };
    }
}

export default rootReducer;