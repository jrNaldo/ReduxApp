// UserReducer 

import UserActionTypes from "./action-types"

const initialState = {
    currentUser: null,
}
const UserReducer = (state = initialState, action) => {
    if(action.type === UserActionTypes.LOGIN){
        return {...state, currentUser:action.payload}
    }

    return state // Sempre retornar o state
}

export default UserReducer