import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ItemListContainer.module.scss';
import Item from '../Item/Item'


const ItemListContainer = ({ titulo, initialValue }) => {

    const categoryId = useParams();

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

    }, [newItemDetail]);

    return (
        <>
            <h1>{titulo}</h1>
            <div className={styles.container}>
                {newItemDetail &&
                    newItemDetail.map(item => (
                        <Link to={`/item/${item.id}`}>
                            <Item
                                key={item.id}
                                item={item}
                            />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default ItemListContainer;
