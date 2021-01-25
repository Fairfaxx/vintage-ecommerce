import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ initialValue }) => {


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
                    setNewItemDetail(resolve[0]);
                })
                .catch((err) => {
                    console.log('Error: ', err);
                });
        };
        emulateFetch()

    }, [newItemDetail]);
    console.log(newItemDetail)
    return (
        <div>
            <ItemDetail newItemDetail={newItemDetail} />
        </div>
    );
};

export default ItemDetailContainer;





