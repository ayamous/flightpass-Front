import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../type';


export interface InitialHeaderState {
    currency: string,

}
const InitialHeaderState: InitialHeaderState = {
    currency: "MAD",


};

const headerSlice = createSlice({
    name: 'header',
    initialState: InitialHeaderState,
    reducers: {
        serCurreny(state, action: PayloadAction<string>) {
            state.currency = action.payload;
            console.log(state.currency )
        },




    },
});

export const headerhActions = headerSlice.actions;

export default headerSlice.reducer;