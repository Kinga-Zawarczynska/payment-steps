import React from 'react';
import styles from '../styles/Product.module.css';

function Product({ name, imgSrc, price }) {
	return (
		<div className={styles.productContainer}>
			<p>{name}</p>
			<img src={imgSrc} alt={name} className={styles.productImage} />
			<p>${price}</p>
		</div>
	);
}

export default Product;
