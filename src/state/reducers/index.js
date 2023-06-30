import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

// combine multiple reducer functions to return them as a single function
const reducers = combineReducers({
    amount : amountReducer
})

export default reducers