import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';


const ItemDetail = ({ itemDetail }) => {

    const quantityContext = useContext(CartContext)
    // const { quantityCount, setQuantityCount } = <ItemCount />
    // const [quantityCount, setQuantityCount] = useState(itemDetail.quantity)
    // console.log(Number(quantityCount))

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
