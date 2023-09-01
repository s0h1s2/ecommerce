import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cart from "../types/CartType";
import { Product } from "../types/ProductType";
const initialState: Cart = { cardItems: [], totalPrice: 0 }
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const item = action.payload;
            const existItem = state.cardItems.find((product) => item.ID == product.ID);
            console.log(existItem)
            if (existItem) {
                state.cardItems = state.cardItems.map((x) => x.ID == existItem.ID ? item : x);
            } else {
                state.cardItems = [...state.cardItems, item]
            }
            console.log(item.qty)
            state.totalPrice = state.cardItems.reduce((acc, product) => (product.price * product.qty) + acc, 0)
        }
    }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer