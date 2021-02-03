import React, { useState, useContext } from 'react'
import ItemCountContainer from '../ItemCount/ItemCountContainer';
import { useParams } from 'react-router-dom';
import CartContext from '../../Context/CartContext'

const ItemDetail = ({ item }) => {

    const { id } = useParams();

    const [product, setProduct] = useState([])
    const [contador, setContador] = useState(0);

    const addCart = () => {
        setProduct([...product, {
            title: item.nombre,
            image: item.thumbnail,
            cantidad: contador
        }])
    }
    return (
        <div>
            <section>
                {
                    item &&
                    <div>
                        <div key={id} >
                            <p>
                                {id}
                            </p>
                            <p>
                                name: {item.nombre}
                            </p>
                            <div> stock:{item.quantity} </div>
                            <div>id: {id} </div>

                        </div>
                        <div>
                            <ItemCountContainer contador={contador} setContador={setContador} min='0' max='10' />
                        </div>
                        <div>
                            <button onClick={() => addCart()}>Añadir a carrito</button>
                        </div>
                    </div>
                }
            </section>
        </div>
    )


};

export default ItemDetail;
