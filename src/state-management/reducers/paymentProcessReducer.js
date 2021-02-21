const initialState = {
    isProcessing: false,
    finishedProcess: true
}

export const paymentProcessReducer = function (state = initialState, action) {
    switch (action.type) {
      case "START_PROCESS":
        return {
            isProcessing: true,
            finishedProcess: false
        }
      case "FINISH_PROCESS":
        return initialState;
      default:
        return state;
    }
  };