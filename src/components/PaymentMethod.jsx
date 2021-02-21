import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import StepButton from './StepButton';
import { cards } from '../constants';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PaymentMethod({ handleStepClick }) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
    };

    const pay = "Potwierdź płatność"

    return (
        <div>
            <Slider {...settings}>
                {cards.map(item => <Card number={item.cardNumber} holder={item.cardHolder} expire={item.expiredDate} ccv={item.ccv} />)}
            </Slider>
            <StepButton title={pay} onClick={() => handleStepClick('next')} />
        </div>
    )
}

export default PaymentMethod;
