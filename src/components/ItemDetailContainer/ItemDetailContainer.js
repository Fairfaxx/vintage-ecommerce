import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams, Link } from 'react-router-dom';

const ItemDetailContainer = ({ initialValue }) => {

    const { id } = useParams();

    const [newItemDetail, setNewItemDetail] = useState({});

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
            <ItemDetail itemDetail={newItemDetail} />
        </div>
    );
};

export default ItemDetailContainer;
