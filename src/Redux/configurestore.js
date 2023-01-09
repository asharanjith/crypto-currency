import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // Add your reducers here
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
