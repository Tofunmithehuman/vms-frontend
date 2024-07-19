import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import visitorCountReducer from './visitorCountSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    visitorCount: visitorCountReducer,
  },
});

export default store;
