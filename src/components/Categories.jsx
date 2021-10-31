import React from 'react'
import {useDispatch} from "react-redux";
import {setCategory} from "../redux/actions/filterActions";
import {setLoading} from "../redux/actions/pizzasActions";

const Categories = React.memo(({items, category}) => {

    const dispatch = useDispatch()

    const onSelectItem = (index) => {
        dispatch(setLoading(true))
        dispatch(setCategory(index))
    }

    return (
        <div className="categories">
            <ul>
                <li className={category === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                {items &&
                items.map((name, index) => <li
                    onClick={() => onSelectItem(index)}
                    key={`${name}_${index}`}
                    className={category === index ? 'active' : ''}
                >{name}</li>)}
            </ul>
        </div>
    )
})

export default Categories