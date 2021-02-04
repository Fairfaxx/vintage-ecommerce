import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import style from './ItemCount.module.scss';
import { CartContext } from '../../CartContext/CartContext';


const ItemCount = ({
    currentItem,
    value,
    quantity,
    handleCount,
    handleDescount,
    onAdding,
    count,
    addingToCart,
    id
}) => {

    const { addProduct } = useContext(CartContext);

    console.log(addProduct.length)
    return (
        <div className={style.container}>
            {onAdding ?
                <>
                    <p className={style.counter}>
                        <button className={style.btn_product} onClick={() => handleDescount()}><i className="fas fa-minus"></i></button>
                        {count}
                        <button className={style.btn_product} onClick={() => handleCount()}><i className="fas fa-plus"></i></button>
                    </p>
                    <Link to='/Cart'><button onClick={() => addProduct(id)} className={style.btn_product}>Terminar mi compra {count}</button></Link>
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
