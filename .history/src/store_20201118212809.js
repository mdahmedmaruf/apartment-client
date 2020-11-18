import { applyMiddleware, combineReducers, createStore } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
import { homeDetailsReducer, homeListReducer } from "./reducers/HomeReducers";

const reducer = combineReducers({
    homeList: homeListReducer,
    homeDetails: homeDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;