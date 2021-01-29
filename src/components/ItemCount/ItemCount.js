import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import style from './ItemCount.module.scss';


const ItemCount = ({ currentItem, value, stock, handleCount, handleDescount, onAdding, count }) => {

    const { quantity } = currentItem;


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
                </p>
            }
        </div>
    )
}

export default ItemCount;
