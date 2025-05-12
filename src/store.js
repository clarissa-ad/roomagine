import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './slices/inputSlice';

export const store = configureStore({
  reducer: {
    input: inputReducer, // Ensure this is correctly set up
  },
});