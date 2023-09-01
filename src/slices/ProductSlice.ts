import { PRODUCT_API_URL } from "../constants/config";
import { Product } from "../types/ProductType";
import { apiSlice } from "./ApiSlice";

export const productSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProducts:builder.query<[Product],void>({
            query:()=>({
                url:PRODUCT_API_URL
            }),
            keepUnusedDataFor:5,
        }),
        getProductById:builder.query<Product,number>({
            query:(id)=>({
                url:`${PRODUCT_API_URL}/${id}`
            }),
            keepUnusedDataFor:5,
        })
    })
})

export const { useGetProductsQuery,useGetProductByIdQuery }=productSlice;