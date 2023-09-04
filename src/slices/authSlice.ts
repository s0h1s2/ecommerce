import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/UserType";
const initialState: { userInfo: User } = localStorage.getItem("user") !== null ? { userInfo: JSON.parse(localStorage.getItem("user")??"{}") } : {
    userInfo:null 
}
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<User>) => {
            state.userInfo = action.payload
            localStorage.setItem("user",JSON.stringify(state.userInfo))
        }

    }

})
export const { setCredentials } = authSlice.actions
export default authSlice.reducer