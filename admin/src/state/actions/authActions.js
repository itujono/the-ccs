import { FETCH_USER, AUTH_USER, UNAUTH_USER, AUTH_ERROR, AUTH_LOADING } from "../common/constants"
import Axios from "axios"
import { baseUrl, baseRoot } from "../common";



export const fetchUser = () => ({
    type: FETCH_USER
})

export const authError = (message) => ({ type: AUTH_ERROR, message })

export const authLoading = () => ({ type: AUTH_LOADING })

export const authUser = (credentials, cb) => dispatch => {
    dispatch(authLoading())
    Axios.post(`${baseUrl}/login`, credentials)
    .then(response => {
        localStorage.setItem('token', response.data.result)
        dispatch({ type: AUTH_USER, payload: response.data.status })
        cb()
    }).catch(err => {
        dispatch(authError("Tampak nya kamu salah masukin email atau password"))
    })
}

export const unauthUser = (cb) => dispatch => {
    dispatch(authLoading())
    Axios.get(`${baseRoot}/logout`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    }).then(response => {
        console.log(response.data)
        localStorage.removeItem('token')
        dispatch({ type: UNAUTH_USER, payload: response.data })
        cb()
    }).catch(err => console.error(err.response))
}