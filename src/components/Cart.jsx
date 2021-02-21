import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import cartImg from '../images/shopping-cart-1105049_640.png';

import styles from '../styles/Cart.module.css';

function Cart() {
const paymentStatus = useSelector((state) => state.paymentProcess.finishedProcess)
const itemsInCart = useSelector((state) => state.cart.products)
const dispatch = useDispatch();
const handleOnClick = () => {
    dispatch({
        type: "START_PROCESS"
    })
    dispatch({
        type: "NEXT_STEP"
    })
}

if(paymentStatus) {
    return (
        <div onClick={handleOnClick}>
            <p className={styles.cartItems}>{itemsInCart.length}</p>
            <img src={cartImg} alt="cart" className={styles.cartImg} />  
        </div>
    )
} else {
    return null;
}
    
}

export default Cart;
