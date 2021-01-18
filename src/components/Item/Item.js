import React from 'react';

const Item = ({ item }) => {
    return (
        <div>
            <h2>{item.nombre}</h2>
            <p>{item.precio}</p>
        </div>
    )
}

export default Item;
