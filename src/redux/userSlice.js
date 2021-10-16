import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    uId: null,
    email: '',
    photoURL: '',
    displayName: '',
    isAuthenticated: false,
    userType: 'player'

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: { // methods to update our state
        userSignIn: (state, action) => {
            state.uId = action.payload.uid;
            state.email = action.payload.email;
            state.isAuthenticated = true;
        }
    }
})

export const { userSignIn } = userSlice.actions;

export default userSlice.reducer; //exporting the reducer as userReducer to add to our store.