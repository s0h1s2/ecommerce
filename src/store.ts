import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
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
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;
