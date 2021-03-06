import React, {useState} from 'react';
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {setPizzaToCart} from "../redux/actions/cartActions";

const PizzaBlock = ({id, name, price, imageUrl, pizzaType, pizzaSize, sizes, types, addedCount}) => {

    const [activeSize, setActiveSize] = useState(sizes[0])
    const [activeType, setActiveType] = useState(types[0])
    const dispatch = useDispatch()

    const selectSize = (size) => {
        if (sizes.includes(size)) {
            setActiveSize(size)
        }
    }


    const selectType = (index) => {
        if (types.includes(index)) {
            setActiveType(index)
        }
    }

    const addPizzaToCart = () => {
        const obj = {id, name, price, activeSize, activeType, imageUrl}
        dispatch(setPizzaToCart(obj))
    }


    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {pizzaType.map((type, index) => <li
                        onClick={() => selectType(index)}
                        className={classNames('type', {
                            'active': activeType === index,
                            'disabled': !types.includes(index)
                        })}
                        key={type}
                    >
                        {type}
                    </li>)}
                </ul>
                <ul>
                    {pizzaSize.map(size =>
                        <li
                            onClick={() => selectSize(size)}
                            className={classNames('size', {
                                'active': activeSize === size,
                                'disabled': !sizes.includes(size)
                            })}
                            key={size}
                        >
                            {size} ????.
                        </li>
                    )}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">???? {price} ??.</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span onClick={addPizzaToCart}>????????????????</span>
                    {addedCount && <i>{addedCount}</i>}
                </div>
            </div>
        </div>
    )
}

export default PizzaBlock