import { configureStore } from '@reduxjs/toolkit';
import pollReducer from './pollSlice';

const store = configureStore({
  reducer: {
     polls:pollReducer
  },
});

export default store;