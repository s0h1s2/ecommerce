import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cart from "../types/CartType";
import { Product } from "../types/ProductType";
const initialState: Cart = { cartItems: [], totalPrice: 0 }
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const item = action.payload;
            const existItem = state.cartItems.find((product) => item.ID == product.ID);
            console.log(existItem)
            if (existItem) {
                state.cartItems = state.cartItems.map((x) => x.ID == existItem.ID ? item : x);
            } else {
                state.cartItems = [...state.cartItems, item]
            }
            console.log(item.qty)
            state.totalPrice = state.cartItems.reduce((acc, product) => (product.price * product.qty) + acc, 0)
        }
    }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer