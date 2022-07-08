import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface InitialDrawerState {
    summaryOpen:boolean,
    descriptionOpen:boolean
    
}
const InitialDrawerState: InitialDrawerState = {
    summaryOpen:false,
    descriptionOpen:false
  
};

const drawerSlice = createSlice({
    name: 'drawer',
    initialState: InitialDrawerState,
    reducers: {
        setSummaryOpen(state, action: PayloadAction<boolean>) {
            state.summaryOpen = action.payload;
           
        },
        setDescriptionOpen(state, action: PayloadAction<boolean>) {
            state.descriptionOpen = action.payload;
           
        },


    },
});

export const drawerActions = drawerSlice.actions;

export default drawerSlice.reducer;