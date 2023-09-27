const initialState = {
    myFavorites: [],
    totalChars: null
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_FAV":
            let copy1 = state.myFavorites;
            copy1.push(payload);
            return {
                ...state, myFavorites: copy1
            }
            
        case "REMOVE_FAV":
            let copy2 = state.myFavorites.filter((char) => char.id !== Number(payload));
            return {
                ...state,
                myFavorites: copy2
            }
        
            case "SET_TOTAL_CHAR":
                return {
                    ...state,
                    totalChars: payload
                }

        default:
            return {
                ...state
            };
    }
}

export default rootReducer;