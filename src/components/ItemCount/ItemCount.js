import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import style from './ItemCount.module.scss';
import { CartContext } from '../../CartContext/CartContext';


const ItemCount = ({
    currentItem,
    value,
    handleCount,
    handleDescount,
    onAdding,
    count,
    // addingToCart,
    id
}) => {

    const [quantity, setQuantity] = useState(0);

    const { addProduct } = useContext(CartContext);

    // const handleCounter = (count) => {
    //     setQuantity(count);
    // };

    const addToCart = () => {
        addProduct(currentItem, quantity);
    };


    // console.log(addProduct.length)
    return (
        <div className={style.container}>
            {onAdding ?
                <>
                    <p className={style.counter}>
                        <button className={style.btn_product} onClick={() => handleDescount()}><i className="fas fa-minus"></i></button>
                        {count}
                        <button className={style.btn_product} onClick={() => handleCount()}><i className="fas fa-plus"></i></button>
                    </p>
                    <Link to='/Cart'><button onClick={() => addToCart()} className={style.btn_product}>Terminar mi compra ({quantity})</button></Link>
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
