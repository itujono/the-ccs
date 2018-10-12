import { SAVE_HOME_FEATURES } from "../constants";

const initialState = {
    items: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case SAVE_HOME_FEATURES:
            return { ...state, items: [ ...state.items, action.payload ] }
        default:
            return state
    }

}