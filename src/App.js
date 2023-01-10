import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NavBar from './components/navbar';
import HomePage from './components/homePage/homePage';
import { fetchCoins } from './Redux/fetchCoin';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <HomePage />
    </div>
  );
};

export default App;
