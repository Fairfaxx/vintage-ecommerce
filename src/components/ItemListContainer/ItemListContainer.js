import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ItemListContainer.module.scss';
import Item from '../Item/Item'


const ItemListContainer = ({ titulo, initialValue }) => {


    const [newItemDetail, setNewItemDetail] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const emulateFetch = () => {
            let findItems = new Promise((resolve, reject) => {
                setTimeout(() => {
                    initialValue ? resolve(initialValue) : reject('No items available');
                }, 3000);
            });

            findItems
                .then((resolve) => {
                    if (categoryId !== undefined) {
                        setNewItemDetail(resolve.filter(product => product.categoryId === Number(categoryId)));
                    } else {
                        console.log('ITEMS FOUNDED! ', initialValue);
                        setNewItemDetail(initialValue);
                    }
                })
                .catch((err) => {
                    console.log('Error: ', err);
                });
        };
        emulateFetch()



    }, [categoryId]);

    return (
        <>
            <h1>{titulo}</h1>
            <div className={styles.container}>
                {newItemDetail.map((itemToMap) => (
                    <Link to={`/item/${itemToMap.id}`} key={itemToMap.id}>
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
