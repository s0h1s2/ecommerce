import { API_PRODUCT_PRODUCTS } from "../constants/config";
import { Product } from "../types/ProductType";
import { apiSlice } from "./ApiSlice";

export const productSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProducts:builder.query<[Product],void>({
            query:()=>({
                url:API_PRODUCT_PRODUCTS
            }),
            keepUnusedDataFor:5,
        }),
        getProductById:builder.query<Product,number>({
            query:(id)=>({
                url:`${API_PRODUCT_PRODUCTS}/${id}`
            }),
            keepUnusedDataFor:5,
        })
    })
})

export const { useGetProductsQuery,useGetProductByIdQuery }=productSlice;
