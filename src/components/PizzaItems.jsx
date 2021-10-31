import React from 'react';
import PizzaBlock from "./PizzaBlock";
import classNames from "classnames";
import LoaderPizza from "./LoaderPizza";
import {useSelector} from "react-redux";

const PizzaItems = ({pizzas, pizzaType, pizzaSize, isLoading}) => {

    const {cartPizza}  = useSelector(state => state.cartReducer)

    console.log(cartPizza)

    return (
        <div className={classNames('div', {
            'content__items-sb': pizzas.length >= 3,
            'content__items-fs': pizzas.length <= 2,
        })}>
            {!isLoading ?
                pizzas.map(pizza => <PizzaBlock
                    {...pizza}
                    key={pizza.id}
                    pizzaType={pizzaType}
                    pizzaSize={pizzaSize}
                    addedCount={cartPizza[pizza.id] && cartPizza[pizza.id].items.length}
                />)
                : Array(10).fill('').map((_, index) => <LoaderPizza key={index}/>)
            }
        </div>
    )
}

export default PizzaItems;