import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/usersSlice';

const store = configureStore({
  reducer: usersReducer,
});

export default store;
