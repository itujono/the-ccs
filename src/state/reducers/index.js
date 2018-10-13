import { combineReducers } from "redux"
import helloReducer from "../reducers/helloReducer"
import userReducer from "../reducers/userReducer"
import homeReducer from "../reducers/homeReducer"
import cartReducer from "../reducers/cartReducer"


const appReducer = combineReducers({
    hello: helloReducer,
    user: userReducer,
    home: homeReducer,
    cart: cartReducer
})

export default appReducer