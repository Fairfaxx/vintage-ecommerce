import React from 'react';
import styles from './Item.module.scss'



const Item = ({ item }) => {



    return (
        <div className={styles.container}>
            <h2 className={styles.item_title}>Producto <br />{item.nombre}</h2>
            <p className={styles.item_para}> Valor ${item.precio}</p>
        </div>
    )
}

export default Item;
