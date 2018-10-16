import { SAVE_HOME_FEATURES, DELETE_HOME_FEATURES, FETCH_INITIAL_ITEMS, MAKE_INITIAL, FETCH_FEATURES } from "../constants";
import features from "../../common/dummy";

const initialState = {
    allSections: features,
    selected: []
}


export default (state = initialState, action) => {

    switch (action.type) {
        case FETCH_FEATURES:
            return { ...state, allSections: features }
        case SAVE_HOME_FEATURES:
            return {
                ...state,
                selected: [...state.selected, action.payload ]
            }
        case DELETE_HOME_FEATURES:
            return { ...state, selected: state.selected.filter(item => item.id !== action.payload) }
        case FETCH_INITIAL_ITEMS:
            const active = state.allSections && state.allSections.find(section => section.id === action.activeSection)
            const names = active.items.map(item => item.name)

            if (active) {
                if (action.hasSubItems && action.hasSubItems[0] !== undefined) {
                    return {
                        ...state,
                        selected: action.payload ? active.items.map(item => {
                            if (item.name === names[0]) return item.subitems.filter(item => item.default)[0]
                            else if (item.name === names[1]) return item.subitems.filter(item => item.default)[0]
                            else if (item.name === names[2]) return item.subitems.filter(item => item.default)[0]
                            else return item.subitems.filter(item => item.default)[0]
                        }) : state.selected
                    }
                } else {
                    return {
                        ...state,
                        selected: action.payload ? active.items.filter(item => item.default) : state.selected
                    }
                }
            }
        case MAKE_INITIAL:
            const current = state.allSections && state.allSections.find(section => section.id === action.activeSection)

            if (current) {
                return { ...state, selected: current.items.filter(item => item.default) }
            }
        default:
            return state
    }

}