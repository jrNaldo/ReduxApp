import CardActionsTypes from "./action-types";

export const removeProductFromCart = (payload) => ({
    type: CardActionsTypes.REMOVE_PRODUCT,
    payload,
})

export const AddQtdeFromCart = (payload) => ({
    type: CardActionsTypes.ADD_QTDE_PRODUCT,
    payload,
})

export const DecQtdeFromCart = (payload) => ({
    type: CardActionsTypes.DEC_QTDE_PRODUCT,
    payload,
})