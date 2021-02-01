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
                        <button className={style.btn_product} onClick={() => handleDescount()}><i className="fas fa-minus"></i></button>
                        {count}
                        <button className={style.btn_product} onClick={() => handleCount()}><i className="fas fa-plus"></i></button>
                    </p>
                    <button onClick={() => alert(`"Adquiriste" ${count}`)} className={style.btn_product}>Terminar mi compra {count}</button>
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
