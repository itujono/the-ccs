import { SAVE_PERSONAL_INFO } from "../constants";


const initialState = {
    user: {}
}



export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PERSONAL_INFO:
            return { ...state, user: action.payload }
        default:
            return state
    }
} 