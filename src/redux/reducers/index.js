import {combineReducers} from "redux";
import {pizzasReducer} from "./pizzasReducer";
import {filterReducer} from "./filterReducer";
import {cartReducer} from "./cartReducer";

export const rootReducer = combineReducers({
    pizzasReducer,
    filterReducer,
    cartReducer
})