import { FETCH_USER, AUTH_USER, AUTH_ERROR, AUTH_LOADING } from "../common/constants"

const initialState = {
    user: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOADING:
            return { ...state, loading: true }
        case AUTH_ERROR:
            return { ...state, error: action.message, loading: false }
        case FETCH_USER :
            return { ...state, user: "Hello!", loading: false }
        case AUTH_USER:
            return { ...state, auth: action.payload, loading: false }
        default:
            return state
    }
}