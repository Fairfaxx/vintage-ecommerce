import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../CartContext/CartContext';
import ItemCountContainer from '../ItemCount/ItemCountContainer';


const ItemDetail = ({ itemDetail, addingToCart }) => {
    console.log(itemDetail);

    const { quantity } = useContext(CartContext);
    console.log('quantityContext', quantity)


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
