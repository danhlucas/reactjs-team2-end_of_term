import { combineReducers } from "redux";

import addItem from "./addItem";
import userReducer from "./userReducer";

const rootReducers = combineReducers({
    addItem: addItem,
    user: userReducer
})

export default rootReducers;