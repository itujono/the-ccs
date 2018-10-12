import { SAVE_HOME_FEATURES } from "../constants";


export const saveHomeFeatures = (data) => ({
    type: SAVE_HOME_FEATURES, payload: data
})