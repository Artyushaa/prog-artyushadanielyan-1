import { configureStore } from '@reduxjs/toolkit';
import delteCard from '../features/deleteCard/deleteSlice';

export const store = configureStore({
  reducer: {
    delete: delteCard
  },
});
