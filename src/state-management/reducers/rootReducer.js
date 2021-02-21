import { combineReducers } from 'redux';
import { stepReducer } from './stepReducer';
import { cartReducer } from './cartReducer';
import { paymentProcessReducer } from './paymentProcessReducer';
import { cardReducer } from './cardReducer';

const rootReducer = combineReducers({
    step: stepReducer,
    cart: cartReducer,
    paymentProcess: paymentProcessReducer,
    cards: cardReducer
});

export default rootReducer;