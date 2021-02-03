import React, { useEffect, useState, useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../../Context/CartContext';


const ItemDetailContainer = ({ initialValue }) => {

    const { id } = useParams();

    // const [newItemDetail, setNewItemDetail] = useState({});
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const [contador, setContador] = useState(0);
    const [cartItems, setCartItems] = useContext(Context);
    const [modal, setModal] = useState(false);




    useEffect(() => {
        setLoading(true);
        const emulateFetch = new Promise((resolve, reject) => {
            setTimeout(() => {
                initialValue ? resolve(initialValue) : reject('No items available');
            }, 3000);
        });
        emulateFetch.then((resolve) => {
            let resolved = resolve.find(product => product.id === Number(id));
            console.log('ITEMS FOUNDED! ', resolved);
            setItem(resolved);
        })
            .catch((err) => {
                console.log('Error: ', err);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [id]);

    const handleComprar = () => {
        let alreadyIn = false;
        cartItems && cartItems.map((itemIn) => {
            if (itemIn.id === item.id) {
                alreadyIn = true
            }
        })
        if (!alreadyIn) {
            let itemCompra = {
                qty: contador,
                ...item
            }
            setCartItems(currentCart => [...currentCart, itemCompra])
        } else {
            setModal(true)
        }
    }

    return (
        <div>

            {
                !modal ?
                    <ItemDetail cartItems={cartItems} loading={loading} item={item} setContador={setContador} contador={contador} handleComprar={handleComprar} />
                    :
                    <div>Loading...</div>
            }

        </div>
    );
};

export default ItemDetailContainer;
