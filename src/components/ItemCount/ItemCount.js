import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import style from './ItemCount.module.scss';


const ItemCount = ({ currentItem }) => {

    const { quantity } = currentItem;
    const [count, setCount] = useState(0)
    const [onAdding, setOnAdding] = useState(false)
    const [quantityCount, setQuantityCount] = useState(0)


    const handleDescount = () => {
        if (count <= 0) {
            return
        }

        setCount(count - 1);
    }
    const handleCount = () => {
        if (count >= quantity) {
            return
        }
        setOnAdding(true);
        setCount(count + 1);
    }

    useEffect(() => {
        if (count === 0) {
            setOnAdding(false)
            // setDisableDiscount(false)
        }
        if (count >= quantity) {
            setOnAdding(true)
            // setDisableCount(true)
        }

        if (quantity) {
            setQuantityCount(quantity)
        }
    }, [count])

    return (
        <div className={style.container}>

            {onAdding ?
                <>
                    <p className={style.counter}>
                        <button className={style.btn_product} onClick={() => handleDescount()}>-</button>
                        {count}
                        <button className={style.btn_product} onClick={() => handleCount()}>+</button>
                    </p>
                    <Link to="/cart"><button className={style.btn_product}>Terminar mi compra {count}</button></Link>
                </>
                :
                <p className={style.counter}>
                    <button className={style.btn_product} onClick={() => handleDescount()}>-</button>
                    {count}
                    <button className={style.btn_product} onClick={() => handleCount()}>+</button>
                </p>}
        </div>
    )
}

export default ItemCount;
