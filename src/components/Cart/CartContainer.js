import React, { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import CartList from './Cart';

const CartContainer = () => {

    const { products } = useContext(CartContext);


    return (
        <div>
            <h1>Carrito</h1>
            <div>
                {products.length === 0 ? (
                    <div>
                        <h3 className="">
                            Actualmente no tienes artículos en tu Carrito
                        </h3>
                        <button
                            path="/"
                            className=''
                        >Volver a comprar</button>
                    </div>
                ) : (
                        <div>
                            <CartList products={products} />
                        </div>
                    )}
            </div>
        </div>
    )
}

export default CartContainer
