import React, { useState } from "react";

export const CartContext = React.createContext();



export const Context = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0)

    // Add Product to Cart
    const addProduct = (product, quantity) => {
        const existingProduct = products.find((prod) => prod.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += quantity;
            setProducts([...products]);
        } else {
            setProducts([...products, { ...product, quantity }]);
        }

        alert(
            "Excelente!",
            `Agregaste ${quantity} ${product.title} al carrito de compras!`,
            "success"
        );
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


    // Total $ Shopping Cart
    const totalPrice = () => {
        return products.reduce(
            (acc, product) => (acc += product.quantity * product.price),
            0
        );
    };

    const emptyCart = () => {
        products.splice(0, products.length);
        return setProducts([...products]);
    };

    console.log(products)

    return (
        <CartContext.Provider value={{ totalPrice, emptyCart, deleteProduct, productsQuantity, handleQuantity, addProduct, products, count, setCount }}>
            {children}
        </CartContext.Provider>
    )
}
// export default CartContext;