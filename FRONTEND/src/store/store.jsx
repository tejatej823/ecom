import {configureStore} from '@reduxjs/toolkit';
import bookReducer from '../features/bookSlice';
import cartReducer from '../features/cartSlice';
import filterReducer from '../features/filterSlice';
export const store=configureStore({
    reducer:{
        books:bookReducer,
        cart:cartReducer,
        filter:filterReducer,
    }
});
