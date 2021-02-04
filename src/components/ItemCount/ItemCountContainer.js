import React, { useState, useEffect, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../../CartContext/CartContext';

const ItemCountContainer = ({ currentItem, addingToCart }) => {

    const { count, setCount } = useContext(CartContext);
    const { quantity, id } = currentItem;
    // const [count, setCount] = useState(0);
    console.log(count)
    const [onAdding, setOnAdding] = useState(false);
    const [quantityCount, setQuantityCount] = useState(quantity);


    const handleDescount = () => {
        if (count <= 0) {
            return
        }

        setCount(count - 1);
        setQuantityCount(quantity + 1);
    }
    const handleCount = () => {
        if (count > quantityCount) {
            return
        }
        setOnAdding(true);
        setCount(count + 1);
        setQuantityCount(quantity - 1);
    }

    useEffect(() => {
        if (count === 0) {
            setOnAdding(false)
            // setDisableDiscount(false)
        }
        if (count >= quantityCount) {
            setOnAdding(true)
            // setDisableCount(true)
        }

        // if (quantity) {
        //     setQuantityCount(quantity)
        // }
    }, [handleDescount, handleCount])


    return (
        <div>
            <ItemCount
                value={count}
                quantity={quantity}
                count={count}
                handleCount={handleCount}
                handleDescount={handleDescount}
                currentItem={currentItem}
                onAdding={onAdding}
                setQuantityCount={setQuantityCount}
                addingToCart={addingToCart}
                id={id}
            />
            <p>Cantidad disponible: {quantity - count}</p>
        </div>
    )
}

export default ItemCountContainer;
