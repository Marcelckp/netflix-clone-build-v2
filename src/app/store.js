import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
//nb

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});