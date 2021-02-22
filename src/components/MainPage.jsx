import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './Cart';
import OrderSummary from './OrderSummary';
import PaymentMethod from './PaymentMethod';
import OrderConfirmation from './OrderConfirmation';
import { nextStep, prevStep } from '../state-management/actions/stepActions';

import styles from '../styles/MainPage.module.css';

function MainPage() {
	const dispatch = useDispatch();
	const paymentStep = useSelector(({ step }) => step.currentStep);
	const handleStepClick = (action) => {
		action === 'next' ? dispatch(nextStep()) : dispatch(prevStep());
	};
	return (
		<div className={styles.mainPageContainer}>
			<Cart />
			{paymentStep === 1 && <OrderSummary handleStepClick={handleStepClick} />}
			{paymentStep === 2 && <PaymentMethod handleStepClick={handleStepClick} />}
			{paymentStep === 3 && <OrderConfirmation handleStepClick={handleStepClick} />}
		</div>
	);
}

export default MainPage;
