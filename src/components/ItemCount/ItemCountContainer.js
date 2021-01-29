import React, { useState, useEffect, Fragment } from 'react';
import ItemCount from './ItemCount';

const ItemCountContainer = ({ currentItem }) => {

    const { quantity } = currentItem;

    // const [value, setValue] = useState(initVal)

    // const handlePlus = () => {
    //     !(value === quantity) && setValue(value + onAdd)
    // }

    // const handleMinus = () => {
    //     !(value === onAdd) && setValue(value - onAdd)
    // }

    // const [count, setCount] = useState(0)
    // const [onAdding, setOnAdding] = useState(false)
    // const [quantityCount, setQuantityCount] = useState(0)

    const [count, setCount] = useState(0)
    const [onAdding, setOnAdding] = useState(false)
    const [quantityCount, setQuantityCount] = useState(quantity)

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
                stock={quantity}
                count={count}
                handleCount={handleCount}
                handleDescount={handleDescount}
                currentItem={currentItem}
                onAdding={onAdding}
                setQuantityCount={setQuantityCount}
            />
            <p>Cantidad disponible: {quantity - count}</p>
        </div>
    )
}

export default ItemCountContainer;
