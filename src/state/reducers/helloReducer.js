import { HELLO_WORLD } from "../constants";


const initialState = {
    hello: []
}



export default (state = initialState, action) => {
    switch (action.type) {
        case HELLO_WORLD:
            return { ...state, hello: [1, "Hello", 3, "Mantap!"] }
        default:
            return state
    }
} 