import UserActionTypes from "./action-types"

export const loginUser = (payload) => ({
    type: UserActionTypes.LOGIN,
    payload
})

export const logoutUser = (payload) => ({
    type: UserActionTypes.LOGOUT //Nem todos as actions precisam de payloag
})