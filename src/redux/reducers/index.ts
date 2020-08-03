import thunk from "redux-thunk";
import {combineReducers, createStore, applyMiddleware} from 'redux'
import { UserAccReducer } from './UserReducer'

const rootReducer = combineReducers ({
    userAccReducer:UserAccReducer
});

const store  = createStore(rootReducer,applyMiddleware(thunk))

export default store;