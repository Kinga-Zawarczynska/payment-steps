import { combineReducers } from 'redux';
import { stepReducer } from './stepReducer';
import { cartReducer } from './cartReducer';
import { paymentProcessReducer } from './paymentProcessReducer';
import { cardReducer } from './cardReducer';
import { payCardReducer } from './payCardReducer';

const rootReducer = combineReducers({
    step: stepReducer,
    cart: cartReducer,
    paymentProcess: paymentProcessReducer,
    cards: cardReducer,
    payWithCard: payCardReducer
});

export default rootReducer;