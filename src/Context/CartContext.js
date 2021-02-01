import React, { useContext, useState } from 'react'

export const CartContext = React.createContext(0);

export const Context = ({ children }) => {
    const [count, setCount] = useState(0);
    const [addToCart, setAddToCart] = useState([])

    return (
        <CartContext.Provider value={[count, setCount], [addToCart, setAddToCart]}>
            {children}
        </CartContext.Provider>
    )
}
