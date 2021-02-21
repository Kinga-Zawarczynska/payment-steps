import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Product from './Product';
import StepButton from './StepButton';
import { products } from '../constants';

import styles from '../styles/OrderSummary.module.css';

function OrderSummary() {
    const dispatch = useDispatch();
    const handleStepClick = (action) => {
        action === 'next' ? 
        dispatch({
            type: "NEXT_STEP"
        }) : 
        dispatch({
            type: "PREVIOUS_STEP"
        }) 
    }
    const orderSum = useSelector((state) => state.cart.products.map(item => item.price)).reduce((a, b) => a + b, 0)
    const pay = 'Przejdź do płatności';
    return (
        <div className={styles.summaryContainer}>
            <p>PODSUMOWANIE ZAMÓWIENIA</p>
            {products.map(({ name, price, imgSrc, uid }) => {
               return <Product key={uid} name={name} price={price} imgSrc={imgSrc} />
            })}
            <p>
                SUMA: {orderSum}$
            </p>
            <StepButton title={pay} onClick={() => handleStepClick('next')} />
        </div>
    )
}

export default OrderSummary;
