const initialState = {
    myFavorites: [],
    allFavorites: [],
    characterDetail: {},
    totalCharacters: null,
    allCharacters: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ALL_CHARARACTERS':
            return {
                ...state,
                allCharacters: payload,
            };


        case 'ADD_FAV':
            return { ...state, myFavorites: payload, allFavorites: payload };

        case 'REMOVE_FAV':
            return { ...state, myFavorites: payload };

        case "FILTER":
            let copy3 = state.allFavorites.filter((char) => char.gender === payload)
            return {
                ...state,
                myFavorites: copy3
            }

        case "ORDER":
            let copy4 = [...state.allFavorites].sort((a, b) => {
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

        case "SHOW_ALL":
            return {
                ...state,
                myFavorites: state.allFavorites
            }

        case "GET_CHARACTER_DETAIL":
            return {
                ...state,
                characterDetail: payload
            }

        case "CLEAN_DETAIL":
            return {
                ...state,
                characterDetail: {},
            };

        case 'GET_TOTAL_CHAR':
            return {
                ...state,
                totalCharacters: payload,
            };

        default:
            return {
                ...state
            };
    }
}

export default rootReducer;