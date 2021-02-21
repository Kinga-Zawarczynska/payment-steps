import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Cart from './Cart';
import OrderSummary from './OrderSummary';

import styles from '../styles/MainPage.module.css';

function MainPage() { 
    const paymentStep = useSelector((state) => state.step.currentStep)
    return (
        <div className={styles.mainPageContainer}>
            <Cart />
            {paymentStep === 1 && <OrderSummary />}
        </div>
    )
}

export default MainPage;
