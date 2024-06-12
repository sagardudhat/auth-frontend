'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/src/app/store';
import { cleanCookiesStorage } from '@/src/services/client-storage';
import { markStates } from '@/src/utils/misc';

import { AuthInitialState } from './types';

const initialState: AuthInitialState = {
  isLoggedIn: true,
  loginUserDetail: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    markAuthStore: (
      state,
      action: PayloadAction<Partial<AuthInitialState>>
    ) => {
      markStates(action.payload, state);
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.loginUserDetail = null;
      cleanCookiesStorage();
    },

    getLogInUserData: (state, action) => {
      state.loginUserDetail = action.payload;
    },
  },
});

export const { logout, getLogInUserData, markAuthStore } = authSlice.actions;

export const selectIsUserLoggedIn = (state: RootState) =>
  state.authReducer.isLoggedIn;

export const selectLogInUserDetails = (state: RootState) =>
  state.authReducer.loginUserDetail;

export default authSlice.reducer;
