import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCHCOIN = 'CRYPTOCURRENCY/REDUX/FETCHCOIN';
// const FETCHCOIN_DETAIL = 'FETCHCOIN_DETAIL';
const baseURL = 'https://api.coingecko.com/api/v3/coins';

export const fetchCoins = createAsyncThunk(
  FETCHCOIN,
  async (args, { dispatch }) => {
    const response = await axios.get(baseURL);
    dispatch({ type: FETCHCOIN, payload: response.data });
  },
);

const initialState = { allData: [] };
const fetchCoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHCOIN:
      return {
        ...state,
        allData: action.payload,
      };
    default:
      return state;
  }
};

export default fetchCoinReducer;
