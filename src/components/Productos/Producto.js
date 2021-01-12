import React from 'react';

const Producto = ({ item }) => {
    return (
        <div>
            <h2>{item.nombre}</h2>
            <p>{item.precio}</p>
        </div>
    )
}

export default Producto;
