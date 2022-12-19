import { configureStore } from '@reduxjs/toolkit';
import addProduct from '../features/addCart/shopingCartSlice';
import deleteShopCard from '../features/deleteCard/deleteSlice';
import filterSlice from '../features/product-filter/productFilterSlice';
import { createWrapper } from 'next-redux-wrapper';




const makeStore = (context) => {
  return configureStore({
    reducer: {
      delete: deleteShopCard,
      filter: filterSlice,
      addCart: addProduct
    },
  });
}

export const wrapper = createWrapper(makeStore);


