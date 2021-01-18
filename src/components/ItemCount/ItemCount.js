import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import style from './ItemCount.module.scss';





const ItemCount = () => {
    const initialValue = [
        { id: 1, nombre: 'Radio Antigua', precio: 9000 },
        { id: 2, nombre: 'Reloj Antiguo', precio: 19000 },
        { id: 3, nombre: 'Pulsera Antigua', precio: 15000 },
    ]
    const [items, setItems] = useState(initialValue)
    const [count, setCount] = useState(0)

    const handleDescount = () => {
        if (count <= 0) {
            return
        }
        setCount(count - 1)
    }
    const handleCount = () => {
        if (count >= items.length) {
            return
        }
        setCount(count + 1)
    }

    useEffect(() => {
        const callData = new Promise((res, rej) => {
            setTimeout(() => res(initialValue), 3000);
        })

        callData.then((res) => {
            console.log(res)
        })

    }, [])

    return (
        <div className={style.container}>
            <h3 className={style.item_title}>Items</h3>
            {
                items.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                    />
                ))
            }
            <p className={style.counter}><button className={style.btn_product} onClick={() => handleDescount()}>-</button>{count}<button className={style.btn_product} onClick={() => handleCount()}>+</button></p>
        </div>
    )
}

export default ItemCount;
