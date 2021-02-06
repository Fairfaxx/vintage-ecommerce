import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../CartContext/CartContext';
import ItemCountContainer from '../ItemCount/ItemCountContainer';


const ItemDetail = ({ itemDetail, addingToCart }) => {


    const { quantity } = useContext(CartContext);
    console.log('Desde itemDetail', itemDetail)
    console.log('Desde itemDetail', itemDetail.nombre)


    return (
        <div>
            <h2>{itemDetail.nombre}</h2>
            <h3>Valor: ${itemDetail.precio}</h3>
            <h3>Cantidad adquirida: {quantity}</h3>
            <ItemCountContainer currentItem={itemDetail} addingToCart={addingToCart} />
        </div>
    );
};

export default ItemDetail;
