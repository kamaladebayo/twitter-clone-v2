import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: '',
    username: '',
    profileImage: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, payload) => {
            console.log(payload);
        }
    }
})

// console.log(userSlice);
export const { loginUser } = userSlice.actions;
export default userSlice.reducer;