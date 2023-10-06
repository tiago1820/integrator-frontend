import { ADD_FAV, REMOVE_FAV, SET_TOTAL_CHAR, SET_USER, REMOVE_USER, ORDER, FILTER, SHOW_ALL, GET_CHARACTER_DETAIL, CLEAN_DETAIL } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    characterDetail: {},
    totalChars: null,
    user: null,
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            const newCharacter = payload;
            const isAlreadyFavorited = state.myFavorites.some(char => char.id === newCharacter.id);

            if(!isAlreadyFavorited) {
                const updateFavorites = [...state.myFavorites, newCharacter];
                return {
                    ...state,
                    myFavorites: updateFavorites,
                    allCharacters: updateFavorites
                }
            }
        
        case REMOVE_FAV:
            let copy2 = state.myFavorites.filter((char) => char.id !== Number(payload));
            return {
                ...state,
                myFavorites: copy2
            }

        case SET_TOTAL_CHAR:
            return {
                ...state,
                totalChars: payload
            }

        case SET_USER:
            return {
                ...state, user: payload
            }

        case REMOVE_USER:
            return {
                ...state, user: null
            }

        case FILTER:
            let copy3 = state.allCharacters.filter((char) => char.gender === payload)
            return {
                ...state,
                myFavorites: copy3
            }

        case ORDER:
            let copy4 = [...state.allCharacters].sort((a, b) => {
                if (payload === "A") {
                    return a.id - b.id
                } else if (payload === "D") {
                    return b.id - a.id
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
            }

        default:
            return {
                ...state
            };
    }
}

export default rootReducer;