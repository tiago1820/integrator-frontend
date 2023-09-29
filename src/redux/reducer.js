const initialState = {
    myFavorites: [],
    totalChars: null,
    user: null,
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_FAV":
            let copy1 = [...state.myFavorites];
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

            case "SET_USER": 
                return {
                    ...state, user: payload
                }

            case "REMOVE_USER":
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