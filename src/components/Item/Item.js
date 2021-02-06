import React from 'react';
import styles from './Item.module.scss'



const Item = ({ item }) => {

    console.log('items', item)
    console.log('items', item.nombre)
    console.log('items', item.categoryId)

    return (
        <div className={styles.container}>
            <h2 className={styles.item_title}>Producto <br />{item.nombre}</h2>
            <p className={styles.item_para}> Valor ${item.precio}</p>
        </div>
    )
}

export default Item;
