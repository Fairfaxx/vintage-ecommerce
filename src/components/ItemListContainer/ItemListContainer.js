import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ItemListContainer.module.scss';
import Item from '../Item/Item'


const ItemListContainer = ({ titulo, initialValue }) => {


    const [newItemDetail, setNewItemDetail] = useState([]);

    const { categoryId } = useParams();

    // if (categoryId !== undefined) {
    //     filterdCategories = initialValue.filter(product => product.categoryId === Number(categoryId.id));
    // } else {
    //     console.log('ITEMS FOUNDED! ', initialValue);
    //     setNewItemDetail(initialValue);
    // }

    // const resolvedCategories = () => {
    //     if (categoryId !== undefined) {
    //         initialValue.filter(product => product.categoryId.id === Number(categoryId.id));
    //     } else {
    //         console.log('ITEMS FOUNDED! ', initialValue);
    //         setNewItemDetail(initialValue);
    //     }
    // }

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
                        resolve.filter(product => product.categoryId === Number(categoryId.id));
                    } else {
                        console.log('ITEMS FOUNDED! ', initialValue);
                        setNewItemDetail(initialValue);
                    }
                    // let resolved = resolve.filter(product => product.categoryId === Number(categoryId));
                    // console.log('ITEMS FOUNDED! ', resolve);
                    // setNewItemDetail(resolve);
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
