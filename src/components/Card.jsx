import React from 'react';

import styles from '../styles/Card.module.css';

function Card({ number, holder, expireMonth, expireYear, cvc, usedCard, onClick }) {
	return (
		<section className={styles.card} onClick={onClick}>
			<div className={usedCard ? `${styles.cardContainer} ${styles.usedCardContainer}` : styles.cardContainer}>
				<p>{number}</p>
				<span className={styles.expireDate}>
					<p>{expireMonth}</p>
					{' / '}
					<p>{expireYear}</p>
				</span>
				<p>{holder}</p>
			</div>
			<div className={usedCard ? `${styles.cardContainer} ${styles.usedCardContainer}` : styles.cardContainer}>
				<p>cvc: {cvc}</p>
			</div>
		</section>
	);
}

export default Card;
