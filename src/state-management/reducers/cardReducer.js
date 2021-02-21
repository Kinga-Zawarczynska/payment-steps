import { cards } from '../../constants';

const initialState = {
        card1: {
            ...cards[0]
        },
        card2: {
            ...cards[1]
        }
}

export const cardReducer = function (state = initialState, action) {
    switch (action.type) {
        case "ADD_CARD":
          return {
              ...state,
              card3: action.payload
          }
          case "USE_THAT_CARD":
          return {
              usedCard: action.payload
          }
        default:
          return state;
      }
};
