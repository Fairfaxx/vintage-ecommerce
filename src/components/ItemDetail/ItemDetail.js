import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ newItemDetail }) => {

    console.log(newItemDetail);

    const categoryId = useParams();

    const [currentItem, setCurrentItem] = useState([]);
    // const [onAdd, setOnAdd] = useState(false)


    console.log(categoryId)

    // useEffect(() => {
    //     const products = newItemDetail.filter(item => item.categoryId.toString() === categoryId.id);
    //     setCurrentItem(products);
    //     console.log(products);
    //     console.log(currentItem);
    //     console.log(categoryId)
    // }, [categoryId, newItemDetail]);



    return (
        <div>
            {newItemDetail &&
                <Link to='/cart'>
                    <h2>{newItemDetail.nombre}</h2>
                    <h3>Valor: ${newItemDetail.precio}</h3>
                    <h3>Cantidad disponible {newItemDetail.quantity}</h3>
                    <ItemCount currentItem={newItemDetail} />
                </Link>
            }
        </div>
    );
};

export default ItemDetail;
