import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/ApiSlice";

const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware:()=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
});
export default store;
