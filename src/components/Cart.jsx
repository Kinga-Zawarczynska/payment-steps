import React from 'react';
import cartImg from '../images/shopping-cart-1105049_640.png';

import styles from '../styles/Cart.module.css';

function Cart() {

    return (
        <div>
            <img src={cartImg} alt="cart" className={styles.cartImg} />
        </div>
    )
}

export default Cart;
