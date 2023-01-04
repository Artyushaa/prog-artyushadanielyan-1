import { configureStore } from '@reduxjs/toolkit';
import shopingCartReducer from '../features/shopingCart/shopingCartSlice';
import filterSlice from '../features/product-filter/productFilterSlice';
import { createWrapper } from 'next-redux-wrapper';




const makeStore = (context) => {
  return configureStore({
    reducer: {
      filter: filterSlice,
      shopingCartState: shopingCartReducer
    },
  });
}

export const wrapper = createWrapper(makeStore);


