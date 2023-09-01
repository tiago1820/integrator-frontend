import { ADD_FAV, REMOVE_FAV } from "../Actions/actionsTypes";

const initialState = {
    myFavorite: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FAV:

            return {
                ...state,
                myFavorite: [
                    ...state.myFavorite,
                    action.payload
                ]

            }

        case REMOVE_FAV:

            return {
                ...state,
                myFavorite: state.myFavorite.filter(el => el.id !== action.payload)
            }


        default:
            return state;
    }
}

export default rootReducer;