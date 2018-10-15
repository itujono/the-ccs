import { SAVE_TOTAL_CART, SAVE_CART_ITEMS } from "../constants";



export const saveTotalCart = (total) => ({
    type: SAVE_TOTAL_CART, payload: total
})

export const saveCartItems = (data) => ({
    type: SAVE_CART_ITEMS, payload: data
})