import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/ApiSlice";
import CartSlice from "./slices/CartSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: CartSlice,
        auth:authSlice
    },
    middleware: () => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;
