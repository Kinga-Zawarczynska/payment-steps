import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import Card from './Card';
import StepButton from './StepButton';
import AddCardForm from './AddCardForm';
import { chooseCard } from '../state-management/actions/payCardActions';

import styles from '../styles/PaymentMethod.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PaymentMethod({ handleStepClick }) {
	const [ cardsToRender, setCardsToRender ] = useState([]);
	const [ showAddCardForm, setShowAddCardForm ] = useState(false);
	const dispatch = useDispatch();
	const cards = useSelector(({ cards }) => cards);
	const usedCard = useSelector(({ payWithCard: { cardId } }) => cardId);

	useEffect(
		() => {
			setCardsToRender(cards);
		},
		[ cards ]
	);

	const toggleCard = (id) => {
		usedCard === id ? dispatch(chooseCard(null)) : dispatch(chooseCard(id));
	};

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		pauseOnHover: true
	};

	const pay = 'Confirm payment';

	return (
		<div className={styles.paymentMethodConatiner}>
			<p>Choose credit card</p>
			<Slider {...settings}>
				{cardsToRender.map((data) => (
					<Card
						key={data.id}
						usedCard={data.id === usedCard ? true : false}
						onClick={() => toggleCard(data.id)}
						number={data.cardNumber}
						holder={data.cardHolder}
						expireMonth={data.expireMonth}
						expireYear={data.expireYear}
						cvc={data.cvc}
					/>
				))}
			</Slider>
			<div className={styles.form}>
				{!showAddCardForm && (
					<div className={styles.formButton} onClick={() => setShowAddCardForm(true)}>
						Add new card
					</div>
				)}
				{showAddCardForm && <AddCardForm setShowAddCardForm={setShowAddCardForm} />}
			</div>
			{usedCard && <StepButton title={pay} onClick={() => handleStepClick('next')} />}
		</div>
	);
}

export default PaymentMethod;
