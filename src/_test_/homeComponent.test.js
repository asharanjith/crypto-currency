import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import fetchCoinReducer from '../Redux/fetchCoin';

const initialState = { allData: [] };
const FETCHCOIN = 'CRYPTOCURRENCY/REDUX/FETCHCOIN';

const rootreducer = combineReducers({
  fetchCoinReducer,
});

const store = configureStore({
  reducer: rootreducer,
},
applyMiddleware(thunk));

describe('reducer testing', () => {
  it('should return initial state correctly', () => {
    expect(store.getState().fetchCoinReducer).toEqual(initialState);
  });
  it('dispatch data updates correctly', () => {
    const sampleData = [
      {
        coin: 'Bitcoin',
        symbol: 'bit',
      },
    ];
    store.dispatch({ type: FETCHCOIN, payload: sampleData });
    expect(store.getState().fetchCoinReducer.allData).toEqual(sampleData);
  });
});
