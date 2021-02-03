import React, { useEffect, useState, useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';


const ItemDetailContainer = ({ initialValue }) => {

    const { id } = useParams();

    const [newItemDetail, setNewItemDetail] = useState({});
    const [addToCart, setAddToCart] = useState([]);

    const addingToCart = (id) => {
        const items = initialValue.filter(item => item.id === id);
        // setAddToCart(items);
        setAddToCart(items);
        console.log(addToCart)
    }


    useEffect(() => {
        const emulateFetch = new Promise((resolve, reject) => {
            setTimeout(() => {
                initialValue ? resolve(initialValue) : reject('No items available');
            }, 3000);
        });
        emulateFetch.then((resolve) => {
            let resolved = resolve.find(product => product.id === Number(id));
            console.log('ITEMS FOUNDED! ', resolved);
            setNewItemDetail(resolved);
        })
            .catch((err) => {
                console.log('Error: ', err);
            })
    }, [id]);

    return (
        <div>
            {
                newItemDetail &&
                <ItemDetail itemDetail={newItemDetail} addingToCart={addingToCart} />
            }
        </div>
    );
};

export default ItemDetailContainer;
