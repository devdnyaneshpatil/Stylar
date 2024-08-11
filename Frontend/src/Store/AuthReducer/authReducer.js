import {  ADD_USER, REMOVE_USER } from "./actionTypes"

const initState = {
    token: '',
    name: '',
    email: '',
    id:null
}

export const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_USER:
            return {
                ...state,
                token: payload.token,
                name: payload.name,
                email: payload.email,
                id:payload.id
            }
        case REMOVE_USER:
            return {
                ...state,
                token: '',
                name: '',
                email: '',
                id:null
            }
        default:
            return state
    }
}