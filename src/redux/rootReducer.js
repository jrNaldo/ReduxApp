import { combineReducers } from "redux";
import UserReducer from "./User/reducer";
import CardReducer from './Card/slice'

const rootReducer = combineReducers({UserReducer, CardReducer})
export default rootReducer