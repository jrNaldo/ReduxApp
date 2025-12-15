import { combineReducers } from "redux";
import UserReducer from "./User/reducer";
import CardReducer from "./Card/reducer";

const rootReducer = combineReducers({UserReducer, CardReducer})
export default rootReducer