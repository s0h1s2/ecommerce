import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/UserType";
const initialState: { userInfo: User } = {
    userInfo: {
        userId: 0,
        name: "",
        email: ""
    }
}
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<User>) => {
            state.userInfo = action.payload
        }

    }

})
export const { setCredentials } = authSlice.actions
export default authSlice.reducer