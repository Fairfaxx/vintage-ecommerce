import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import styles from './ItemListContainer.module.scss';
import Item from '../Item/Item'
import Loading from '../Loading/Loading';


const ItemListContainer = ({ titulo, initialValue }) => {

    const [loading, setLoading] = useState(false)
    const [newItemDetail, setNewItemDetail] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        let itemCollection = db.collection("items");
        itemCollection.get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('No hay resultados')
                }
                let itemsArray = querySnapshot.docs.map(doc => doc.data())
                setNewItemDetail(itemsArray);
                // if (categoryId !== undefined) {
                //     setNewItemDetail(querySnapshot.filter(product => product.categoryId === Number(categoryId)));
                // } else {
                //     console.log('ITEMS FOUNDED! ', initialValue);
                //     setNewItemDetail(querySnapshot.docs.map(doc => doc.data()));
                // }
                // setNewItemDetail(querySnapshot.docs.map(doc => doc.data()));
            }).catch((error) => {
                console.log("error al buscar items", error);
            }).finally(() => {
                setLoading(false);
            });


    }, [])


    return (
        <>
            <h1>{titulo}</h1>
            <div className={styles.container}>
                {
                    loading ? <Loading /> :
                        newItemDetail.map((itemToMap, index) => (
                            <Link to={`/item/${itemToMap.id}`} key={index}>
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
