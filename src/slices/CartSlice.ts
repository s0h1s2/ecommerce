import { createSlice } from "@reduxjs/toolkit";
import Cart from "../types/CartType";
const initialState: Cart = { cardItems: [], totalPrice: 0 }
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cardItems.find((id) => item.id == id);
            if (existItem) {
                state.cardItems = state.cardItems.map((x) => x.ID == existItem.ID ? item : x);
            } else {
                state.cardItems = [...state.cardItems, item]
            }
            state.totalPrice = state.cardItems.reduce((acc, product) => product.price + acc, 0)
        }
    }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer