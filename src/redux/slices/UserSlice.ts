import { createSlice } from '@reduxjs/toolkit'

const initialState: User = {
    userInfo: null,
    role: null,
    isLoggedIn: false,
    isLoading: false,
    token: null,
}

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers:{
        userLoginRequested: (state, action)=>{
            state.isLoading = true
        },
        userLoginSuccess: (state, action)=>{
            // state.userInfo = action.payload.userInfo;
            state.role = action.payload.role;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        userLoginFailed: (state, action)=>{
            // state.userInfo = action.payload.userInfo;
            state.isLoading = false;
        },
        userLogoutRequested: (state, action)=>{
            state.role = null;
            state.token = null;
            state.isLoggedIn = false;
            state.isLoading = false;
        },
        userLoggedIn: (state, action)=>{
            state.userInfo = action.payload.userInfo;
            state.isLoggedIn = true;
            state.token = action.payload.token;
        },
        userLoggedOut: (state, action)=>{
            state.userInfo = null;
            state.isLoggedIn = false;
            state.token = null;
        },
    }

})

export const { userLoggedIn, userLoggedOut , userLoginRequested, userLoginSuccess , userLoginFailed, userLogoutRequested} = UserSlice.actions;
export default UserSlice.reducer;