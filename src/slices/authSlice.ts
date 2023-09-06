import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/UserType";
import { startTransition } from "react";
const initialState: { userInfo: User|null } = localStorage.getItem("user") !== null ? { userInfo: JSON.parse(localStorage.getItem("user")??"{}") } : {
    userInfo:null 
}
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<User>) => {
            state.userInfo = action.payload
            localStorage.setItem("user",JSON.stringify(state.userInfo))
        },
        logout:(state,action:PayloadAction<void>)=>{
            state.userInfo=null
            localStorage.removeItem("user")
        }

    }

})
export const { setCredentials,logout } = authSlice.actions
export default authSlice.reducer
