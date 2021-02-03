import React, { useState } from 'react'

export const CartContext = React.createContext([]);



export const Context = ({ children }) => {
    const [count, setCount] = useState(0);
    const [addToCart, setAddToCart] = useState([])




    return (
        <CartContext.Provider value={null}>
            {children}
        </CartContext.Provider>
    )
}
