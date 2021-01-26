import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ newItem }) => {

    const itemId = useParams();
    console.log(itemId)

    const [currentItem, setCurrentItem] = useState([]);

    console.log(newItem)


    useEffect(() => {
        const products = newItem.filter(item => item);
        setCurrentItem(products[0]);
        console.log(products[0])
        console.log(currentItem)
    }, [itemId, newItem]);

    console.log(currentItem)
    return (
        <div>
            {currentItem &&
                <>
                    <h2>{currentItem.nombre}</h2>
                    <h3>Valor: ${currentItem.precio}</h3>
                </>
            }
            <ItemCount />
        </div>
    );
};

export default ItemDetail;
