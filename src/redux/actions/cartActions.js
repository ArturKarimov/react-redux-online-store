import {ADD_PIZZA_IN_CART, CLEAR_PIZZA_IN_CART, DELETE_PIZZA_IN_CART, SET_PIZZA_TO_CART} from "../types";

export const setPizzaToCart = (obj) => ({
    type: SET_PIZZA_TO_CART,
    payload: obj
})

export const deletePizzaInCart = (pizzaId) => ({
    type: DELETE_PIZZA_IN_CART,
    payload: pizzaId
})

export const clearPizzaInCart = () => ({
    type: CLEAR_PIZZA_IN_CART,
})

export const addPizzaInCart = (pizzaId) => ({
    type: ADD_PIZZA_IN_CART,
    payload: pizzaId
})