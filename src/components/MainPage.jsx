import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Cart from './Cart';
import OrderSummary from './OrderSummary';
import PaymentMethod from './PaymentMethod'

import styles from '../styles/MainPage.module.css';

function MainPage() { 
    const dispatch = useDispatch()
    const paymentStep = useSelector((state) => state.step.currentStep)
    const handleStepClick = (action) => {
        action === 'next' ? 
        dispatch({
            type: "NEXT_STEP"
        }) : 
        dispatch({
            type: "PREVIOUS_STEP"
        }) 
    }
    return (
        <div className={styles.mainPageContainer}>
            <Cart />
            {paymentStep === 1 && <OrderSummary handleStepClick={handleStepClick} />}
            {paymentStep === 2 && <PaymentMethod handleStepClick={handleStepClick} />}
        </div>
    )
}

export default MainPage;
