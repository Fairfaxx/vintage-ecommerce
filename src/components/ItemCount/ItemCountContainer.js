import React, { useState, useEffect, Fragment } from 'react';
import ItemCount from './ItemCount';

const ItemCountContainer = ({ min, max, counter, setCounter }) => {

    const [showing, setShowing] = useState(false);
    const [disablePlusButton, setDisablePlusButton] = useState(false);
    const [disableMinusButton, setDisableMinusButton] = useState(true);

    const handlerCounter = e => {
        e === "+" && (counter === Number(max)) && setShowing(true);
        e === "+" && (counter < Number(max)) && setCounter(counter + 1);
        e === "-" && (counter > Number(min)) && setCounter(counter - 1);
    }

    useEffect(() => {
        if (counter === Number(max)) setDisablePlusButton(true);
        if (counter === Number(min)) setDisableMinuButton(true);
        if ((counter < Number(max)) && (counter > Number(min))) {
            disablePlusButton && setDisablePlusButton(false)
            disableMinusButton && setDisableMinusButton(false)
        }
    }, [counter])

    return (
        <div>
            <ItemCount
                counter={counter}
                handlerCounter={handlerCounter}
                disableMinusButton={disableMinusButton}
                disablePlusButton={disablePlusButton}
            />
            <div showing={showing} onHiding={() => setShowing(false)}>
                <h2>Fuera de Stock</h2>
            </div>
            <div>
                <p>Alcanzaste el máximo permitido</p>
                <button onClick={() => setShowing(false)}>Cerrar</button>
            </div>
        </div>
    )
}

export default ItemCountContainer;
