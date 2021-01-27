import React from 'react';


const Item = ({ item }) => {



    return (
        <div>
            <h2>Producto <br />{item.nombre}</h2>
            <p>Valor ${item.precio}</p>
        </div>
    )
}

export default Item;
