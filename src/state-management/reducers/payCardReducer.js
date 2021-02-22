const initialState = {
    cardId: null
}

export const payCardReducer = function (state = initialState, action) {
    switch (action.type) {
        case "USE_THAT_CARD":
          return {
              cardId: action.payload
          }
        default:
          return state;
      }
};
