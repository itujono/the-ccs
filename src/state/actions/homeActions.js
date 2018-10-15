import { SAVE_HOME_FEATURES, DELETE_HOME_FEATURES, FETCH_INITIAL_ITEMS, MAKE_INITIAL, FETCH_FEATURES } from "../constants";


export const saveHomeFeatures = (data) => ({
    type: SAVE_HOME_FEATURES, payload: data
})

export const deleteHomeFeatures = (itemId) => ({
    type: DELETE_HOME_FEATURES, payload: itemId
})

export const fetchInitialItems = (initial) => ({
    type: FETCH_INITIAL_ITEMS, payload: initial
})

export const makeInitial = () => ({ type: MAKE_INITIAL })

export const fetchFeatures = () => ({ type: FETCH_FEATURES })