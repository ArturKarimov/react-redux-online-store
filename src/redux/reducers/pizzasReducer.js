import {SET_LOADING, SET_PIZZAS} from "../types";

const initialState = {
    pizzas: [],
    isLoading: true
}

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                pizzas: action.payload,
                isLoading: false
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }

        default:
            return state
    }
}