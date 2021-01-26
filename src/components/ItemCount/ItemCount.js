import React, { useState } from 'react';
// import Item from '../Item/Item';
import style from './ItemCount.module.scss';


const ItemCount = ({ currentItem }) => {

    const { quantity } = currentItem;
    const [count, setCount] = useState(0)

    const handleDescount = () => {
        if (count <= 0) {
            return
        }
        setCount(count - 1)
    }
    const handleCount = () => {
        if (count >= quantity) {
            return
        }
        setCount(count + 1)
    }

    return (
        <div className={style.container}>
            <h3 className={style.item_title}>Items</h3>
            {/* {
                items.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                    />
                ))
            } */}
            <p className={style.counter}>
                <button className={style.btn_product} onClick={() => handleDescount()}>-</button>
                {count}
                <button className={style.btn_product} onClick={() => handleCount()}>+</button>
            </p>
        </div>
    )
}

export default ItemCount;
