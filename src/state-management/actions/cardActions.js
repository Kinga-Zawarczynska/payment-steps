export const addCard = (payload, uid) => {
    return {
        type: "ADD_CARD",
        payload: {...payload, id: `${payload.cvc}${uid}`}
    }
};