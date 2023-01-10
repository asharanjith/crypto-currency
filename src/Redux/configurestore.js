import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import fetchCoinReducer from './fetchCoin';

const rootreducer = combineReducers({
  allCoins: fetchCoinReducer,
});

const store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
