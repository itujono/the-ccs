import { SAVE_TOTAL_CART, SAVE_CART_ITEMS } from "../constants";


const initialState = {
    cart: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TOTAL_CART:
            return { ...state, total: action.payload }
        case SAVE_CART_ITEMS:
            return { ...state, cart: [ ...state.cart, action.payload ] }
        default:
            return state
    }
}