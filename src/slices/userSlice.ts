import { USER_LOGIN_URL } from "../constants/config";
import { apiSlice } from "./ApiSlice";

export const userSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(data)=>({
                url:USER_LOGIN_URL,
                method:"POST",
                body:data
                
            })
        })
    })
})

export const { useLoginMutation }=userSlice;