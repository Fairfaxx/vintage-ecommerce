import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ newItem }) => {

    const itemId = useParams();

    const [currentItem, setCurrentItem] = useState([]);
    const [onAdd, setOnAdd] = useState(false)



    useEffect(() => {
        const products = newItem.filter(item => item.id);
        setCurrentItem(products[0]);
        console.log(products[0])
        console.log(currentItem)
        if (currentItem) {
            setOnAdd(true)
        }

    }, [itemId, newItem]);



    console.log(currentItem)
    return (
        <div>
            {currentItem &&
                <>
                    <h2>{currentItem.nombre}</h2>
                    <h3>Valor: ${currentItem.precio}</h3>
                    <h3>Cantidad disponible {currentItem.quantity}</h3>
                    {onAdd ?
                        <>
                            <ItemCount currentItem={currentItem} /> <Link to="/levels"><button>Terminar mi compra</button></Link>
                        </>
                        :
                        <ItemCount currentItem={currentItem}

                        />}

                </>
            }
        </div>
    );
};

export default ItemDetail;
