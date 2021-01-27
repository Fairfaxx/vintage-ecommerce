import React from 'react';
import styles from './Item.module.scss'
import Reloj from '../Assets/reloj_antiguo.jpg'
const Item = ({ item }) => {



    return (
        <div className={styles.container}>
            <img className={styles.images} src={Reloj} alt="" />
            <h2 className={styles.item_title}>Producto <br />{item.nombre}</h2>
            <p className={styles.item_para}> Valor ${item.precio}</p>
        </div>
    )
}

export default Item;
