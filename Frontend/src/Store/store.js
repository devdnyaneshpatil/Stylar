import { combineReducers, createStore } from "redux"

import { loadingReducer } from './LoadingReducer/loadingReducer'
import { authReducer } from "./AuthReducer/authReducer" 

const rootReducer = combineReducers({
    loading: loadingReducer,
    auth:authReducer
})

export const store = createStore(rootReducer)

