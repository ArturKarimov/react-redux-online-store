import {
    ADD_PIZZA_IN_CART,
    CLEAR_PIZZA_IN_CART,
    DELETE_PIZZA_IN_CART,
    SET_PIZZA_TO_CART,
    SET_TOTAL_PIZZA,
    SET_TOTAL_PRICE
} from "../types";

const initialState = {
    cartPizza: {},
    totalPizza: 0,
    totalPrice: 0
}

const totalPrice = (arr) => {
    return Object.values(arr).reduce((acc, el) => {return acc + el.price}, 0)
}

const totalPizza = (arr) => {
    return Object.values(arr).length
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZA_TO_CART:
            const currentPizzaItems = !state.cartPizza[action.payload.id]
                ? [action.payload]
                : [...state.cartPizza[action.payload.id].items, action.payload]



            const newObj = {
                ...state.cartPizza,
                [action.payload.id] : {
                    items: currentPizzaItems,
                    totalPrice: totalPrice(currentPizzaItems),
                    totalPizza: totalPizza(currentPizzaItems)
                }
            }

            const objItems = Object.values(newObj).map(el => el.items)

            return {
                ...state,
                cartPizza: newObj,
                totalPrice: Object.values(objItems).flat(2).reduce((acc, el) => {return acc + el.price}, 0),
                totalPizza: Object.values(objItems).flat(2).length
            }

            
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload
            }
        case SET_TOTAL_PIZZA:
            return {
                ...state,
                totalPizza: action.payload
            }
        case DELETE_PIZZA_IN_CART: {
            const newObj = {
                ...state.cartPizza
            }

            const currentTotalPrice = newObj[action.payload].totalPrice
            const currentTotalPizza = newObj[action.payload].totalPizza

            delete newObj[action.payload]

            return {
                ...state,
                cartPizza: newObj,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalPizza: state.totalPizza - currentTotalPizza
            }
        }



        case CLEAR_PIZZA_IN_CART:
            return {
                ...state,
                cartPizza: {},
                totalPizza: 0,
                totalPrice: 0
            }
        case ADD_PIZZA_IN_CART:

            const newItems = [
                ...state.cartPizza[action.payload].items,
                state.cartPizza[action.payload].items[0]
            ]

            const items = Object.values(state.cartPizza).map(el => el.items)

            return {
                ...state,
                cartPizza: {
                    ...state.cartPizza,
                    [action.payload]: {
                        items: newItems,
                        totalPrice: totalPrice(newItems),
                        totalPizza: totalPizza(newItems)
                    }
                },
                totalPizza: totalPizza(newItems),
                totalPrice: Object.values(state.cartPizza).map(el => el.totalPrice)

            }
        default:
            return state
    }
}