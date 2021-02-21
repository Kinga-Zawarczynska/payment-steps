import React from 'react';

import styles from '../styles/Card.module.css';

function Card({ number, holder, expire, ccv }) {
    return (
        <div className={styles.card}>
        <div className={styles.cardContainer}>
            <p>{number}</p>
            <p>{expire}</p>
            <p>{holder}</p>
        </div>
        <div className={styles.cardContainer}>
            <p>CCV: {ccv}</p>
        </div>
        </div>
        
    )
}

export default Card;
