import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import rootReducer from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: false,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
