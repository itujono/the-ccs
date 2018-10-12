import { SAVE_PERSONAL_INFO } from "../constants";



export const savePersonalInfo = (data) => ({
    type: SAVE_PERSONAL_INFO, payload: data
})