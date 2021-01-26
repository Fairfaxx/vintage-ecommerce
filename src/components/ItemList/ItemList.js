import React, { useState, useEffect } from 'react'
import Item from '../Item/Item';


const ItemList = ({ initialValue }) => {

    // const initialValue = [
    //     { id: 1, nombre: 'Radio Antigua', precio: 9000 },
    //     { id: 2, nombre: 'Reloj Antiguo', precio: 19000 },
    //     { id: 3, nombre: 'Pulsera Antigua', precio: 15000 },
    // ]
    const [items, setItems] = useState(initialValue)



    return (
        <div>
            {
                items.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                    // nombre={item.nombre}
                    // precio={item.precio}
                    />
                ))
            }
        </div>
    )
}

export default ItemList
