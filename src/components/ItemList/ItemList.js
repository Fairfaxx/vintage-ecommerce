import React, { useState, useEffect } from 'react'
import Item from '../Item/Item';


const ItemList = ({ initialValue }) => {


    const [items, setItems] = useState(initialValue)



    return (
        <div>
            {
                items.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                        nombre={item.nombre}
                        precio={item.precio}
                    />
                ))
            }
        </div>
    )
}

export default ItemList
