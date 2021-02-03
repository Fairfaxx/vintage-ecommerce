// import React, { useState, useEffect, useContext } from 'react';
// import ItemCount from './ItemCount';
// // import { CartProvider } from '../../Context/CartContext';

// const ItemCountContainer = ({ currentItem, loading, item, setContador, contador, handleComprar }) => {

//     const { quantity, id } = currentItem;


//     const [onAdding, setOnAdding] = useState(false);
//     const [quantityCount, setQuantityCount] = useState(quantity);


//     // const addingToCart = (id) => {
//     //     const items = currentItem.filter(item => item.id === id);
//     //     console.log(items)
//     // }

//     const handleDescount = () => {
//         if (contador <= 0) {
//             return
//         }

//         setContador(contador - 1);
//         setQuantityCount(quantity + 1);
//     }
//     const handleCount = () => {
//         if (contador > quantityCount) {
//             return
//         }
//         setOnAdding(true);
//         setContador(contador + 1);
//         setQuantityCount(quantity - 1);
//     }

//     useEffect(() => {
//         if (contador === 0) {
//             setOnAdding(false)
//             // setDisableDiscount(false)
//         }
//         if (contador >= quantityCount) {
//             setOnAdding(true)
//             // setDisableCount(true)
//         }

//         // if (quantity) {
//         //     setQuantityCount(quantity)
//         // }
//     }, [handleDescount, handleCount])


//     return (
//         <div>
//             <ItemCount
//                 value={contador}
//                 quantity={quantity}
//                 contador={contador}
//                 handleCount={handleCount}
//                 handleDescount={handleDescount}
//                 currentItem={currentItem}
//                 onAdding={onAdding}
//                 setQuantityCount={setQuantityCount}
//                 handleComprar={handleComprar}
//                 id={id}
//             />
//             <p>Cantidad disponible: {quantity - contador}</p>
//         </div>
//     )
// }

// export default ItemCountContainer;

import React, { useState, useEffect, useContext } from 'react';
import ItemCount from './ItemCount';
const ItemCountContainer = ({ min, max, setContador, contador }) => {

    const onAdd = (sign) => {
        if ((sign === '+') && (contador < max)) {
            setContador(contador + 1);
        } else if ((sign === '-') && (contador > min)) {
            setContador(contador - 1)
        }
    }

    return (
        <ItemCount contador={contador} onAdd={onAdd} />
    )

}

export default ItemCountContainer