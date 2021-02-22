import React from 'react';
import styles from '../styles/StepButton.module.css';

function StepButton({ title, onClick }) {
	return (
		<div onClick={onClick} className={styles.stepButton}>
			{title}
		</div>
	);
}

export default StepButton;
