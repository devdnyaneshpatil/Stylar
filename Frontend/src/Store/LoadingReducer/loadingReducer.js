import { START_LOADING, STOP_LOADING } from "./actionTypes"

const initState = {
    isLoading:false
}

export const loadingReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case START_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case STOP_LOADING:
            return {
                ...state,
                isLoading:false
            }
        default:
            return state
    }
}