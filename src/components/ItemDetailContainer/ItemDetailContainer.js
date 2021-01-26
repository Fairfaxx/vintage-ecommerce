import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = (props) => {

    const initialValue = [
        { id: 1, nombre: 'Radio Antigua', precio: 9000, quantity: 5, categoryId: 'radios' },
        { id: 2, nombre: 'Reloj Antiguo', precio: 19000, quantity: 5, categoryId: 'relojes' },
        { id: 3, nombre: 'Pulsera Antigua', precio: 15000, quantity: 5, categoryId: 'pulseras' },
    ]

    const [newItemDetail, setNewItemDetail] = useState([]);

    // const getData = new Promise((res, error) => {
    //   setTimeout(() => res(initialValue), 3000);
    // });

    useEffect(() => {
        const emulateFetch = () => {
            let findItems = new Promise((resolve, reject) => {
                setTimeout(() => {
                    initialValue ? resolve(initialValue) : reject('No items available');
                }, 3000);
            });

            findItems
                .then((resolve) => {
                    console.log('ITEMS FOUNDED! ', resolve);
                    setNewItemDetail(resolve);
                })
                .catch((err) => {
                    console.log('Error: ', err);
                });
        };
        emulateFetch()

    }, []);
    console.log(newItemDetail)
    return (
        <div>
            <ItemDetail newItem={newItemDetail} />
        </div>
    );
};

export default ItemDetailContainer;





