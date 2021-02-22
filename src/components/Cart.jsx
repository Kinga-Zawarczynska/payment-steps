import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartImg from '../images/shopping-cart-1105049_640.png';
import { startProcess } from '../state-management/actions/paymentProcessActions';
import { nextStep } from '../state-management/actions/stepActions';

import styles from '../styles/Cart.module.css';

function Cart() {
	const paymentStatus = useSelector((state) => state.paymentProcess.finishedProcess);
	const itemsInCart = useSelector((state) => state.cart.products);
	const dispatch = useDispatch();
	const handleOnClick = () => {
		dispatch(startProcess());
		dispatch(nextStep());
	};

	if (paymentStatus) {
		return (
			<div onClick={handleOnClick}>
				<p className={styles.cartItems}>{itemsInCart.length}</p>
				<img src={cartImg} alt="cart" className={styles.cartImg} />
			</div>
		);
	} else if (itemsInCart.length === 0) {
		return <p>Nothing to buy.</p>;
	} else {
		return null;
	}
}

export default Cart;
