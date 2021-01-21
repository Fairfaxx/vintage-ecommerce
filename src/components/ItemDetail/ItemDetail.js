import React from 'react';


import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ newItemDetail }) => {

    const { id, nombre, precio } = newItemDetail;
    return (
        <div>
            <h2 style={{ backgroundColor: 'red' }}>{nombre}</h2>
            <h3>Valor: ${precio}</h3>
            <ItemCount />
        </div>
    );
};

export default ItemDetail;
