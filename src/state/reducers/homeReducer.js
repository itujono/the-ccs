import { SAVE_HOME_FEATURES, DELETE_HOME_FEATURES, FETCH_INITIAL_ITEMS, MAKE_INITIAL, FETCH_FEATURES } from "../constants";
import features from "../../common/dummy";

const initialState = {
    allFeatures: features,
    selected: []
}

console.log(initialState)

export default (state = initialState, action) => {

    switch (action.type) {
        case FETCH_FEATURES:
            return { ...state, allFeatures: features }
        case SAVE_HOME_FEATURES:
            return {
                ...state,
                selected: [...state.selected, action.payload ]
            }
        case DELETE_HOME_FEATURES:
            return { ...state, selected: state.selected.filter(item => item.id !== action.payload) }
        // case FETCH_INITIAL_ITEMS:
        //     return {
        //         ...state,
        //         selected: action.payload ? state.allFeatures.items.filter(item => item.default) : state.selected
        //     }
        // case MAKE_INITIAL:
        //     return { ...state, selected: state.allFeatures.items.filter(item => item.default) }
        default:
            return state
    }

}