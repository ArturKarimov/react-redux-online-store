import {SET_LOADING, SET_PIZZAS} from "../types";
import axios from "axios";

export const setPizzas = (pizzas) => ({
    type: SET_PIZZAS,
    payload: pizzas
})

export const setLoading = (isLoading) => ({
    type: SET_LOADING,
    payload: isLoading
})


export const fetchPizzas = (category, sortBy) => dispatch => {
    dispatch(setLoading(true))
    axios.get(`http://localhost:3000/pizzas?${category !== null 
        ? `category=${category}` : ''}&_sort=${sortBy}&_${sortBy == 'rating' 
        ? `order=ask` : `order=desk`}`).then(({data}) => dispatch(setPizzas(data)))
}




