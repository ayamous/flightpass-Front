import { configureStore } from '@reduxjs/toolkit';

import authReducer, { InitialAuthState } from './auth';

import homeReducer, { InitialHomeState } from './home';
import portletReducer, { InitialPortletState } from './portlet';
import configurationReducer, { InitialConfigtate } from './configuration';
import drawerReducer, { InitialDrawerState } from './drawer';
import headerReducer, { InitialHeaderState } from "./header"
import { useDispatch } from 'react-redux';




export interface Istate {
  auth: InitialAuthState
  home: InitialHomeState,
  portlet: InitialPortletState,
  configuration: InitialConfigtate,
  drarwer: InitialDrawerState,
  header:InitialHeaderState
}

const store = configureStore({
  reducer: { auth: authReducer, home: homeReducer, portlet: portletReducer, configuration: configurationReducer, drarwer: drawerReducer, header: headerReducer },
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;