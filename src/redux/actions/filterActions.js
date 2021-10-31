import {SET_CATEGORY, SET_SORT_BY} from "../types";

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category
})

export const setSortBy = (sortType) => ({
    type: SET_SORT_BY,
    payload: sortType
})