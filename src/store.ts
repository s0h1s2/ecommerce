import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/ApiSlice";
import CartSlice from "./slices/CartSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: CartSlice
    },
    middleware: () => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});
export default store;
