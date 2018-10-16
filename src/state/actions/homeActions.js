import { SAVE_HOME_FEATURES, DELETE_HOME_FEATURES, FETCH_INITIAL_ITEMS, MAKE_INITIAL, FETCH_FEATURES } from "../constants";


export const saveHomeFeatures = (itemId) => ({
    type: SAVE_HOME_FEATURES, payload: itemId
})

export const deleteHomeFeatures = (itemId) => ({
    type: DELETE_HOME_FEATURES, payload: itemId
})

export const fetchInitialItems = (initial, activeSection, hasSubItems) => ({
    type: FETCH_INITIAL_ITEMS, payload: initial, activeSection, hasSubItems
})

export const makeInitial = (activeSection, hasSubItems) => ({ type: MAKE_INITIAL, activeSection, hasSubItems })

export const fetchFeatures = () => ({ type: FETCH_FEATURES })