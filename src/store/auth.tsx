import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../type';


export interface InitialAuthState {
    isAuthenticated: boolean,
    firstName: string | null,
    
}
const initialAuthState: InitialAuthState = {
    isAuthenticated: false,
    firstName: null,
  
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state, action: PayloadAction<string>) {
            state.isAuthenticated = true;
            state.firstName = action.payload;
            console.log('in red ',state.isAuthenticated)
           
        },


        logout(state) {
            state.isAuthenticated = false;
        },

    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;