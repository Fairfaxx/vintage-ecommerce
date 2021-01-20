import React, { useEffect, useState } from 'react';

const ItemDetailContainer = ({ initialValue }) => {

    const [itemDetail, setItemDetail] = useState(null)
    const getData = new Promise((res, error) => {
        setTimeout(() => res(initialValue), 3000);
    });



    useEffect(() => {
        const getItems = () => {
            return getData.then(res => res);
        }
        setItemDetail(getItems[1])

        console.log(getData);

    }, [itemDetail])

    return (
        <div>
            <p>{itemDetail}</p>
        </div>
    )
}

export default ItemDetailContainer;
