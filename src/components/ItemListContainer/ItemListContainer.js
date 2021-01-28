import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ItemListContainer.module.scss';
import Item from '../Item/Item'


const ItemListContainer = ({ titulo, initialValue }) => {


    const [newItemDetail, setNewItemDetail] = useState([]);
    // const [onAdd, setOnAdd] = useState(false)

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

    return (
        <>
            <h1>{titulo}</h1>
            <div className={styles.container}>
                { newItemDetail.map((itemToMap) => (
                        <Link to={`/item/${itemToMap.id}`}>
                            <Item
                                key={itemToMap.id}
                                item={itemToMap}
                            />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default ItemListContainer;
