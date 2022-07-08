import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GiCoinsPile } from 'react-icons/gi';
import { baseConfig, config, dayToDeparture, delay, Segment, User } from '../type';


export interface InitialConfigtate {
    baseConfigList: baseConfig[],
    segmentList: Segment[],
    delayList: delay[],
    dayToDepartureList: dayToDeparture[],
    currentConfig: config
    totalPrice: number,
    unitPrice: number,
    loadPrice: boolean,
    sliderDelayStep: number,
    currentSegmentId: number,
    currentConfigId: number,
    fromHome: boolean,
    step: string,
    forMe:boolean,
    forAnother:boolean
}
const initialConfigtate: InitialConfigtate = {
    baseConfigList: [],
    segmentList: [],
    delayList: [],
    currentConfig: {
        nbrFlights: 1,
        percentageNbrFlights: 0.1,
        delay: 1,
        percentagePassDelay: 0.2,
        dayToDeparture: 1,
        percentageDayToTravel: 0.2,
    },
    currentSegmentId: 1,
    currentConfigId: 1,
    dayToDepartureList: [],
    totalPrice: 0,
    unitPrice: 0,
    sliderDelayStep: 0,
    //Load State
    loadPrice: false,
    //comingFrom
    fromHome: false,
    step: "configuration",
    forMe:false,
    forAnother:false

};

const configSlice = createSlice({
    name: 'configuration',
    initialState: initialConfigtate,
    reducers: {
        setBaseConfigList(state, action: PayloadAction<baseConfig[]>) {
            state.baseConfigList = action.payload
        },

        setDelayList(state, action: PayloadAction<delay[]>) {
            state.delayList = action.payload
        },
        setDayToDepartureList(state, action: PayloadAction<dayToDeparture[]>) {
            state.dayToDepartureList = action.payload
        },
        setCurrentBaseConfig(state, action: PayloadAction<baseConfig>) {
            state.currentConfig.nbrFlights = action.payload.nbrFlights;
            state.currentConfig.percentageNbrFlights = action.payload.percentage;
        },
        setCurrentpassDelay(state, action: PayloadAction<delay>) {
            state.currentConfig.delay = action.payload.nbrMonths
            state.currentConfig.percentagePassDelay = action.payload.percentage
        },
        setPassDelaySlider(state, action: PayloadAction<number>) {
            state.sliderDelayStep = action.payload
        },
        setCurrentDayToDeparture(state, action: PayloadAction<dayToDeparture>) {
            state.currentConfig.dayToDeparture = action.payload.nbrDays
            state.currentConfig.percentageDayToTravel = action.payload.percentage
        },
        setCurrentPrice(state, action: PayloadAction<number>) {
            state.totalPrice = action.payload
            if (state.currentConfig) {
                state.unitPrice = state.totalPrice / state.currentConfig.nbrFlights

            }
        },
        setCurrentSegment(state, action: PayloadAction<number>) {
            state.currentSegmentId = action.payload
        },
        setCurrentConfigId(state, action: PayloadAction<number>) {
            state.currentConfigId = action.payload
        },

        setCurrentAllConfig(state, action: PayloadAction<config>) {
            state.currentConfig = action.payload
        },
        setPrice(state, action: PayloadAction<number>) {
            state.totalPrice = action.payload
            if (state.currentConfig) {
                state.unitPrice = state.totalPrice / state.currentConfig.nbrFlights

            }
        },
        setLoadPrice(state, action: PayloadAction<boolean>) {
            state.loadPrice = action.payload
        },

        setFromHome(state, action: PayloadAction<boolean>) {
            state.fromHome = action.payload
        },
        setCurrentStep(state, action: PayloadAction<string>) {
            state.step = action.payload
        },
        setForme(state, action: PayloadAction<boolean>) {
            state.forMe = action.payload
        },
        setForAnother(state, action: PayloadAction<boolean>) {
            state.forAnother = action.payload
        }
    },
});

export const configActions = configSlice.actions;

export default configSlice.reducer;