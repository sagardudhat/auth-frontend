import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '@/src/stores/auth/authSlice';

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
