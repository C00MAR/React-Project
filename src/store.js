import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from './Services/API' 

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware), 
})

export default store;

setupListeners(store.dispatch)