import { SAVE_HOME_FEATURES, DELETE_HOME_FEATURES } from "../constants";

const initialState = {
    items: [
        { id: 1, name: "Slider", price: 200000 , description: "Sempardak bukanlah hak segala bangsa yang hakiki dan jumawa", default: true },
        { id: 2, name: "Search produk", price: 240000 , description: "Mungkin kita bukanlah putra terbaik bangsa, namun ketika nasi ayam sedang diskon, maka itu adalah ikan", default: true },
        { id: 3, name: "Filter produk", price: 350000 , description: "Kenapa takut jika tak naik haji? Bukankah orang India tak pernah mandi junub?", default: true },
        { id: 4, name: "List produk - Hot", price: 280000 , description: "Sesuatu yang dikatakan dengan lantang adalah kebiasaan ikan gabus yang semenjana", default: true },
        { id: 5, name: "List produk - Promo", price: 320000 , description: "Sempardak bukanlah hak segala bangsa yang hakiki dan jumawa", default: true },
        { id: 6, name: "List produk - Rekomendasi", price: 500000 , description: "Mungkin kita bukanlah putra terbaik bangsa, namun ketika nasi ayam sedang diskon, maka itu adalah perumpamaan", default: false },
        { id: 7, name: "Tour", price: 790000 , description: "Kenapa takut jika tak naik haji? Bukankah orang India tak pernah mandi junub?", default: false }
    ],
    selected: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case SAVE_HOME_FEATURES:
            return { ...state, items: [ ...state.items ], selected: [...state.selected, action.payload ] }
        case DELETE_HOME_FEATURES:
            console.log(state.selected)
            console.log(action.payload)
            return { ...state, selected: state.selected.filter(item => item.id !== action.payload) }
        default:
            return state
    }

}