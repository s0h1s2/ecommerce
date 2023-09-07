import { API_USER_LOGIN, API_USER_SIGNUP} from "../constants/config";
import { apiSlice } from "./ApiSlice";

export const userSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(data)=>({
                url:API_USER_LOGIN,
                method:"POST",
                body:data
                
            })
        }),
        register:builder.mutation({
        query:(data)=>({
          url:API_USER_SIGNUP,
          method:"POST",
          body:data
      })
    })
    })
})

export const { useLoginMutation,useRegisterMutation }=userSlice;
