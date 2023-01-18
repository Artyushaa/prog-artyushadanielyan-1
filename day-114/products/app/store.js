import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from '../features/ShoppingCart/shoppingCartSlice';
import filterSlice from '../features/product-filter/productFilterSlice';
import { createWrapper } from 'next-redux-wrapper';




const makeStore = (context) => {
  return configureStore({
    reducer: {
      filter: filterSlice,
      shoppingCart: shoppingCartReducer
    },
  });
}

export const wrapper = createWrapper(makeStore);


