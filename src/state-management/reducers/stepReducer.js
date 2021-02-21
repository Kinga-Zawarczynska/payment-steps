const initialState = {
    currentStep: 0,
}

export const stepReducer = function (state = initialState, action) {
    switch (action.type) {
      case "NEXT_STEP":
        return {
          ...state,
          currentStep: state.currentStep + 1
        };
      case "PREVIOUS_STEP":
        return state.currentStep - 1;
      default:
        return state;
    }
  };