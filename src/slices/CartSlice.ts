import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cart from "../types/CartType";
import { Product } from "../types/ProductType";
import { PaymentType } from "../types/PaymentType";
const initialState: Cart = {
    cartItems: [], shippingAddress: {
        address: "",
        city: "",
        country: "",
        postalCode: ""
    }, paymentMethod: {
        paymentType: PaymentType.Paypal
    }, totalPrice: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const item = action.payload;
            const existItem = state.cartItems.find((product) => item.id == product.id);
            if (existItem) {
                state.cartItems = state.cartItems.map((x) => x.id == existItem.id ? item : x);
            } else {
                state.cartItems = [...state.cartItems, item]
            }
            state.totalPrice = state.cartItems.reduce((acc, product) => (product.price * product.qty) + acc, 0)
        },
        setShippingInfo: (state, action: PayloadAction<Shipping>) => {
            state.shippingAddress = action.payload
        },
        removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
            state.cartItems = state.cartItems.filter((product) => action.payload.id != product.id);
        },
        clearCart: (state, _action: PayloadAction<void>) => {
            state.cartItems = []
            state.totalPrice = 0
        }
    }
})
export const { addToCart, removeFromCart, setShippingInfo, clearCart } = cartSlice.actions
export default cartSlice.reducer
