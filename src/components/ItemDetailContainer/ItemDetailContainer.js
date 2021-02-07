import React, { useEffect, useState, useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams, Link } from 'react-router-dom';
import CartContext from '../../CartContext/CartContext';
import { getFirestore } from '../../firebase';


const ItemDetailContainer = ({ initialValue }) => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    const [newItemDetail, setNewItemDetail] = useState([]);
    const [addToCart, setAddToCart] = useState([]);

    // const addingToCart = (id) => {
    //     const items = initialValue.filter(item => item.id === id);
    //     // setAddToCart(items);
    //     setAddToCart(items);
    //     console.log(addToCart)
    // }


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
        <div>
            {
                newItemDetail &&
                <ItemDetail itemDetail={newItemDetail} />
            }
        </div>
    );
};

export default ItemDetailContainer;
