import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../axiosConfig';
import { Portlet, Segment } from '../type';

export const getPortlets = createAsyncThunk(
    'getPortlets',
    async (segmentList: Segment[]) => {
        console.log("thunk" ,segmentList )
        let segmentPortlets: { segment_id: number, portlets: Portlet[] }[] = [];
        const promises = segmentList.map(segment => {
            const url = `public/api/portlet/?segmentId=${segment.segmentId}&pageName=HOME`
            return axiosInstance.get(url)
        })
        await Promise.all(promises)
            .then((res) => {
                console.log('res',res)
                res.forEach(element => {
                    if (element.data.length > 0) {
                        segmentPortlets.push({
                            segment_id: element.data[0]?.p_segmentRef_Id,
                            portlets: element.data
                        })
                    }
                });
                //dispatch(homeActions.setcurrentSegment(segmentPortlets[0].segment_id))
            })
        return segmentPortlets
    }
)



export interface InitialPortletState {
    portletList:
    {
        segment_id: number, portlets: Portlet[]
    }[]

    portletMapList:
    {
        segment_id: number, portlets: Portlet[]
    }[],
    test: boolean

}
const InitialPortletState: InitialPortletState = {
    portletList: [],
    portletMapList: [],
    test: false
};

const PortletSlice = createSlice({
    name: 'portlet',
    initialState: InitialPortletState,
    reducers: {
        setPortlet(state, action: PayloadAction<{ segment_id: number, portlets: Portlet[] }[]>) {
            state.portletList = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPortlets.pending, (state, action) => {

            })
            .addCase(getPortlets.fulfilled, (state, action) => {
                console.log(action.payload ,"action")
                state.portletList = action.payload

            })
            .addCase(getPortlets.rejected, (state, action) => {

            })
    },
});


export const portletActions = PortletSlice.actions;

export default PortletSlice.reducer;