import React from 'react';
import { CartContext } from '../../CartContext/CartContext';
import Cart from './Cart';

const CartList = ({ products }) => {

    const { totalPrice } = useContext(CartContext);


    return (
        <div>
            <div>
                <h6>Producto</h6>
                <h6>Cantidad</h6>
                <h6>Precio</h6>
            </div>
            <div>
                {products.map((product, key) => (
                    <Cart key={key} product={product} />
                ))}
            </div>
            <div className="">
                <h5 className="">
                    Total{totalPrice}
                    <span className="">${totalPrice()}</span>
                </h5>
                <button
                    path={"/checkout/"}
                    className={""}
                >"Comprar"</button>
            </div>
        </div>
    )
}

export default CartList
