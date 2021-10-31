import React, {useEffect, useState} from 'react';
import {Categories} from "../components";
import SortPopup from "../components/SortPopup";
import PizzaItems from "../components/PizzaItems";
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas, setPizzas} from "../redux/actions/pizzasActions";
import axios from "axios";

const pizzaType = ['тонкое', 'традиционное']
const pizzaSize = [26, 30, 40]


const sortItems = [
    {name: 'популярности', type: 'rating'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'name'}
]

const items = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

const Home = () => {


    const dispatch = useDispatch()
    const {pizzas, isLoading} = useSelector(state => state.pizzasReducer)
    const {category, sortBy} = useSelector(state => state.filterReducer)

    window.test = () => {
        axios.get(`http://localhost:3000/pizzas?${category !== null
            ? `category=${category}` : ''}&_sort=${sortBy}&_${sortBy == 'rating'
            ? `order=ask` : `order=desk`}`).then(({data}) => dispatch(setPizzas(data)))
    }

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={items}
                    category={category}
                />
                <SortPopup items={sortItems} sortBy={sortBy} isLoading={isLoading}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <PizzaItems pizzas={pizzas} pizzaType={pizzaType} pizzaSize={pizzaSize} isLoading={isLoading}/>
        </div>
    )
}

export default Home