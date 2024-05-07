import { createSlice } from '@reduxjs/toolkit'

const initialState: User = {
    userInfo: null,
    isLoggedIn: false,
    token: null,
}

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers:{
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

export const { userLoggedIn, userLoggedOut } = UserSlice.actions;
export default UserSlice.reducer;