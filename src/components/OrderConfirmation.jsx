import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import StepButton from './StepButton';
import { finishProcess } from '../state-management/actions/paymentProcessActions';
import { cleanCart } from '../state-management/actions/cartActions';

function OrderConfirmation({ handleStepClick }) {
	const usedCard = useSelector(({ payWithCard: { cardId } }) => cardId);
	const cardData = useSelector(({ cards }) => cards.filter((item) => item.id === usedCard));
	const { cardNumber, cardHolder, expireMonth, expireYear, cvc } = cardData[0];
	const backButton = 'Back to main page';
	const dispatch = useDispatch();

	const handleClick = () => {
		handleStepClick();
		dispatch(finishProcess());
		dispatch(cleanCart());
	};

	return (
		<div>
			Success! Payment is now completed. You paid for this order with:
			<Card number={cardNumber} holder={cardHolder} expireMonth={expireMonth} expireYear={expireYear} cvc={cvc} />
			<StepButton title={backButton} onClick={handleClick} />
		</div>
	);
}

export default OrderConfirmation;
