import React, { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';

const Cart = ({ product }) => {


    const { deleteProduct } = useContext(CartContext);
    console.log(product)


    const deleteItem = (id) => {
        deleteProduct(id);
    };


    return (
        <div>
            <div>
                <h5> {product} </h5>
            </div>
            <div className="">
                {/* <h6 className=""> {product.precio} </h6> */}
            </div>
        </div>
    )
}

export default Cart;
