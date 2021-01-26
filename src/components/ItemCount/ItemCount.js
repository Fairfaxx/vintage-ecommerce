import React, { useState } from 'react';
import { Link } from "react-router-dom";
import style from './ItemCount.module.scss';


const ItemCount = ({ currentItem }) => {

    const { quantity } = currentItem;
    const [count, setCount] = useState(0)
    const [onAdding, setOnAdding] = useState(false)

    const handleDescount = () => {
        if (count <= 0) {
            return
        }
        setCount(count - 1)
    }
    const handleCount = () => {
        if (count >= quantity) {
            setOnAdding(true)
            return
        }
        setCount(count + 1)
    }

    return (
        <div className={style.container}>

            {/* {
                items.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                    />
                ))
            } */}

            {onAdding ? <Link to="/levels"><button className={style.btn_product}>Terminar mi compra</button></Link> : <p className={style.counter}>
                <button className={style.btn_product} onClick={() => handleDescount()}>-</button>
                {count}
                <button className={style.btn_product} onClick={() => handleCount()}>+</button>
            </p>}
        </div>
    )
}

export default ItemCount;
