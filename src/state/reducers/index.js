import { combineReducers } from "redux"
import helloReducer from "../reducers/helloReducer"
import userReducer from "../reducers/userReducer"
import homeReducer from "../reducers/homeReducer";


const appReducer = combineReducers({
    hello: helloReducer,
    user: userReducer,
    home: homeReducer
})

export default appReducer