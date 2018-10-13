import { SAVE_TOTAL_CART } from "../constants";


const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TOTAL_CART:
            return { ...state, total: action.payload }
        default:
            return state
    }
}