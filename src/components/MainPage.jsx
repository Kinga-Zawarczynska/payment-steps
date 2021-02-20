import React from 'react';
import Product from './Product';
import Cart from './Cart';
import { products } from '../constants';

import styles from '../styles/MainPage.module.css';

function MainPage() {
    return (
        <div className={styles.mainPageContainer}>
            <Cart />
            {products.map(({ name, price, imgSrc, uid }) => {
               return <Product name={name} price={price} imgSrc={imgSrc} key={uid} />
            })}
        </div>
    )
}

export default MainPage;
