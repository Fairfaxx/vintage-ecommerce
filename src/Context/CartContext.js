import React, { useContext, useState } from 'react'

export const CartContext = React.createContext(0);

export const Context = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CartContext.Provider value={[count, setCount]}>
            {children}
        </CartContext.Provider>
    )
}
