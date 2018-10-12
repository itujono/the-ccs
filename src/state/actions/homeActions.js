import { SAVE_HOME_FEATURES, DELETE_HOME_FEATURES } from "../constants";


export const saveHomeFeatures = (data) => ({
    type: SAVE_HOME_FEATURES, payload: data
})

export const deleteHomeFeatures = (itemId) => {
    console.log(itemId)
    return {
        type: DELETE_HOME_FEATURES, payload: itemId
    }
}