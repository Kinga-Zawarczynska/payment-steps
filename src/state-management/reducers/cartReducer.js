import { products } from '../../constants';

const initialState = {
        products
}

export const cartReducer = function (state = initialState, action) {
    switch (action.type) {
        case "CLEAN_CART":
          return {products: []}
        default:
          return state;
      }
};
