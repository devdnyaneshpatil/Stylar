import {ADD_USER,REMOVE_USER} from "./actionTypes"

export const addUser = (payload) => {
    return {
        type: ADD_USER,
        payload
    }
}

export const removeUser = () => {
    return {
        type:REMOVE_USER
    }
}