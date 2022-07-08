import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { useRef } from 'react';
import axiosInstance from '../axiosConfig';
import { defaultSegment } from '../default';
import { User, Segment, config } from '../type';


let data: any;

export const getSegmets = createAsyncThunk(
    'getAllSegments',
    async () => {
        const response = await axiosInstance.get("public/segment/getAll");
        data = response.data
        return data
    }
)

export const getBasePrice = createAsyncThunk(
    'getAllSegments',
    async () => {
        const response = await axiosInstance.get("public/segment/getAll");
        data = response.data
        return data
    }
)


export interface InitialHomeState {
    segmentList: Segment[],
    currentSegment_id: number,
    currentSegment: Segment,
    isSelectOpen: boolean,
    //loading state
    LoadDefaultConfiguration: boolean,
    test:boolean


}
const initialAuthState: InitialHomeState = {
    segmentList: [defaultSegment],
    currentSegment_id: 0,
    isSelectOpen: false,
    LoadDefaultConfiguration: true,
    currentSegment: defaultSegment,
    test:false

};


const HomeSlice = createSlice({
    name: 'home',
    initialState: initialAuthState,
    reducers: {
        setSegmants(state, action: PayloadAction<Segment[]>) {
            state.segmentList = action.payload
        },

        setcurrentSegment(state, action: PayloadAction<number>) {
            state.currentSegment_id = action.payload
            state.currentSegment = current(state.segmentList).find(element => element.segmentId == action.payload) || defaultSegment


        },
        openSelect(state) {
            state.isSelectOpen = !state.isSelectOpen
        },
        //loadingstate
        setLoadDefaultConfiguration(state, action) {
            state.LoadDefaultConfiguration = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSegmets.pending, (state, action) => {

            })
            .addCase(getSegmets.fulfilled, (state, action) => {
                state.segmentList = action.payload.content

            })
            .addCase(getSegmets.rejected, (state, action) => {
            })
            

    },

});

export const homeActions = HomeSlice.actions;

export default HomeSlice.reducer;