import {SET_CATEGORY, SET_SORT_BY} from "../types";

const initialState = {
    category: null,
    sortBy: 'rating',
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload,
            }
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        default:
            return state
    }
}