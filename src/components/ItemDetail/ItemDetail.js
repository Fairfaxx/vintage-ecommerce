import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({itemDetail}) => {

    return (
        <div>
            <h2>{itemDetail.nombre}</h2>
            <h3>Valor: ${itemDetail.precio}</h3>
            <h3>Cantidad disponible {itemDetail.quantity}</h3>
            <ItemCount currentItem={itemDetail} />
        </div>
    );
};

export default ItemDetail;
