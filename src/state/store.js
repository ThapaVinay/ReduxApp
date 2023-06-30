import { applyMiddleware, createStore } from "redux";
import reducers from './reducers'
import thunk from 'redux-thunk'  // to execute asynchronous functions

export const store = createStore(reducers, {}, applyMiddleware(thunk))