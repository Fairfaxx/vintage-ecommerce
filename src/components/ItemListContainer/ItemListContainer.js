import React from 'react';
import styles from './ItemListContainer.module.scss';

const ItemListContainer = ({ titulo }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.main_title}>{titulo}</h1>
        </div>
    )
}

export default ItemListContainer;
