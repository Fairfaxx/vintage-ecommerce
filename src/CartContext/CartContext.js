import React, { useState } from "react";

export const CartContext = React.createContext();



export const Context = ({ children }) => {

    const [products, setProducts] = useState([]);

    // Add Product to Cart
    const addProduct = (product, quantity) => {
        const existingProduct = products.find((prod) => prod.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += quantity;
            setProducts([...products]);
        } else {
            setProducts([...products, { ...product, quantity }]);
        }
    };

    const handleQuantity = (product, quantity) => {
        product.quantity = quantity;
        setProducts([...products]);
    };

    //Total Quantity in Cart
    const productsQuantity = () => {
        return products.reduce((acc, product) => (acc += product.quantity), 0);
    };

    // Delete Product from List
    const deleteProduct = (id) => {
        products.splice(
            products.findIndex((product) => product.id === id),
            1
        );
        setProducts([...products]);
    };



    return (
        <CartContext.Provider value={{ deleteProduct, productsQuantity, handleQuantity, addProduct, products }}>
            {children}
        </CartContext.Provider>
    )
}
// export default CartContext;