import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import StepButton from './StepButton';
import { products } from '../constants';

import styles from '../styles/OrderSummary.module.css';

function OrderSummary({ handleStepClick }) {
	const orderSum = useSelector((state) => state.cart.products.map((item) => item.price)).reduce((a, b) => a + b, 0);
	const pay = 'Go to payment';
	return (
		<div className={styles.summaryContainer}>
			<p>ORDER SUMMARY</p>
			{products.map(({ name, price, imgSrc, uid }) => {
				return <Product key={uid} name={name} price={price} imgSrc={imgSrc} />;
			})}
			<p>SUM: {orderSum}$</p>
			<StepButton title={pay} onClick={() => handleStepClick('next')} />
		</div>
	);
}

export default OrderSummary;
