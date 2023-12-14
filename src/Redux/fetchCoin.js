import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCHCOIN = 'CRYPTOCURRENCY/REDUX/FETCHCOIN';
const baseURL = 'https://api.coingecko.com/api/v3/coins/';
const apiKey = 'CG-fZUopFtQ42UF3XX1LdyazBtR';
const URL = `${baseURL}?x_cg_demo_api_key=${apiKey}`;

export const fetchCoins = createAsyncThunk(
  FETCHCOIN,
  async (args, { dispatch }) => {
    const response = await axios.get(URL);
    dispatch({
      type: FETCHCOIN,
      payload: response.data,
    });
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
