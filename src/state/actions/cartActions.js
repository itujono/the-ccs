import { SAVE_TOTAL_CART } from "../constants";



export const saveTotalCart = (total) => ({
    type: SAVE_TOTAL_CART, payload: total
})