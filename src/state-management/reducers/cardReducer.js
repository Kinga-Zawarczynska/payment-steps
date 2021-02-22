import { cards } from '../../constants';

const initialState = [...cards]

export const cardReducer = function (state = initialState, action) {
    switch (action.type) {
        case "ADD_CARD":
          return [
            action.payload,
            ...state
            ] 
        default:
          return state;
      }
};
