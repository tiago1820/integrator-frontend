const initialState = {
    myFavorites: [],
    allCharacters: [],
    characterDetail: {},
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // case "ADD_FAV":
        //     let copy1 = state.allCharacters;
        //     copy1.push(payload);
        //     return {
        //         ...state, myFavorites: copy1,
        //         allCharacters: copy1
        //     }
        case 'ADD_FAV':
            return { ...state, myFavorites: payload, allCharacters: payload };

        // case "REMOVE_FAV":
        //     let copy2 = state.myFavorites.filter((char) => char.id !== Number(payload));
        //     return {
        //         ...state,
        //         myFavorites: copy2
        //     }
        case 'REMOVE_FAV':
         return { ...state, myFavorites: payload };

        case "FILTER":
            let copy3 = state.allCharacters.filter((char) => char.gender === payload)
            return {
                ...state,
                myFavorites: copy3
            }

        case "ORDER":
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

        case "SHOW_ALL":
            return {
                ...state,
                myFavorites: state.allCharacters
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

        default:
            return {
                ...state
            };
    }
}

export default rootReducer;