import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import appReducer from "../reducers"


const createAppStore = () => {
    return createStore(appReducer, applyMiddleware(thunk))
}

export default createAppStore